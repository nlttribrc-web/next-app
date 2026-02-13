import { email, z } from "zod";

const schema = z.object({
    name: z.string().min(3),
    email: email(),
})

export default schema;