import NextAuth, { NextAuthOptions } from "next-auth"
import { NextRequest, NextResponse } from "next/server";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/prisma/client";
import bcrypt from 'bcrypt';
import { get } from "lodash";

export const authOptions: NextAuthOptions = {
    // adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: { label: 'Email', type: 'email', placeholder: 'Email' },
                password: { label: 'Password', type: 'password', placeholder: 'Password' },
            },
            // async authorize(credentials, req) {
            //     if(!credentials?.email || !credentials.password) return null

            //     const user = await prisma.user.findUnique({ 
            //         where: {email: credentials.email} 
            //     })

            //     if (!user) return null;

            //     const passwordMatch = await bcrypt.compare(
            //         credentials.password, 
            //         user.hashedPassword!
            //     );

            //     return passwordMatch ? user : null;
            // }
            async authorize(credentials, req) {
                if(!credentials?.email || !credentials.password) return null
                // const user = { id: "1", name: "John Doe", email: "johndoe@example.com" }
                
                const res = await fetch("http://localhost:3000/api/register", {
                    method: 'POST',
                    body: JSON.stringify(credentials),
                    headers: { "Content-Type": "application/json" }
                });

                const user = await res.json()
                user.name = "Test"

                console.log(user);

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_CLIENT_ID!,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        // })
    ],
    session: {
        strategy: 'jwt'
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }