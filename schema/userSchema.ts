import { z } from 'zod';

const UserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  gender: z.string().min(1, { message: "Gender is required" }),
  children: z.array(z.string()).nonempty({ message: "Children array cannot be empty" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
  accepted: z.boolean().refine(val => val === true, { message: "Accepted must be true" }),
});

type UserSchemaType = z.infer<typeof UserSchema>

export { UserSchema, UserSchemaType };
