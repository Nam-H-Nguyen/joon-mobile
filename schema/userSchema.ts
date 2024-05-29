import { z } from "zod";

export const UserNameSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
});

export const UserGenderSchema = z.object({
  gender: z
    .enum(["male", "female", "other"])
    .refine((value) => value !== undefined, {
      message: "Please select one of the option",
    }),
});

export const UserChildrenSchema = z.object({
  children: z.array(
    z.object({
      name: z.string().min(1, { message: "Name is required." }),
    })
  ),
});

export const UserAccountCreateSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  accepted: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

export type UserNameSchemaType = z.infer<typeof UserNameSchema>;
export type UserGenderSchemaType = z.infer<typeof UserGenderSchema>;
export type UserChildrenSchemaType = z.infer<typeof UserChildrenSchema>;
export type UserAccountCreateSchemaType = z.infer<
  typeof UserAccountCreateSchema
>;
export type UserSchemaType = UserNameSchemaType &
  UserGenderSchemaType &
  UserChildrenSchemaType &
  UserAccountCreateSchemaType;
