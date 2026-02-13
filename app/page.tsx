'use client'
import Image from 'next/image'
import coffee from '@/public/images/coffee.jpg'
import snow from '@/public/images/cld-sample-2.jpg'
import Link from 'next/link'
import ProductCard from './components/ProductCard'
import { getServerSession } from 'next-auth'
import { authOptions } from './api/auth/[...nextauth]/route'
import { Metadata } from 'next'
import { useState } from 'react'

export default function Home() {
  // const session = await getServerSession(authOptions);
  
  return (
    <main className='relative h-screen'>
      <h1>Hello World</h1>
      <Link href="/user">Users</Link>
      <ProductCard/>
      <button onClick={async () => {
        const _ = (await import('lodash')).default;

        const users = [
          { name: 'c' },
          { name: 'b' },
          { name: 'a' },
        ];

        const sorted = _.orderBy(users, ['name']);
        console.log(sorted)
      }}>Show</button>
      {/* <Image 
        src={snow} 
        alt='' 
        fill
        className='object-cover'
        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        quality={100}
        priority
        /> */}
    </main>
  )
}

// export async function generateMetadata(): Promise<Metadata> {
//   const product = await fetch('');

//   return {
//     title: 'product.title',
//     description: '....'
//   }
// }