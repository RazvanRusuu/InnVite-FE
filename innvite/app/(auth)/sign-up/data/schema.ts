import * as z from "zod";

export const signupSchema = z
  .object({
    name: z.string().min(3),
    email: z.string().email("Please enter a valid email"),
    password: z.string().min(8),
    passwordConfirm: z.string().min(8),
  })
  .superRefine(({ password, passwordConfirm }, ctx) => {
    if (password !== passwordConfirm) {
      ctx.addIssue({
        message: "Passwords don't match",
        path: [passwordConfirm],
        code: z.ZodIssueCode.custom,
      });
    }
  });

export type TSignup = z.infer<typeof signupSchema>;
