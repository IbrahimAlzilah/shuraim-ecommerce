import { z } from "zod"

import { isYemeniPhoneNumber } from "@rawnaq/utils"

export const emailSchema = z.string().trim().email({ message: "invalidEmail" })

export const phoneSchema = z
  .string()
  .trim()
  .refine((value) => isYemeniPhoneNumber(value), {
    message: "invalidPhone",
  })

export const passwordSchema = z
  .string()
  .min(8, { message: "passwordTooShort" })
  .refine((value) => /[a-zA-Z]/.test(value) && /\d/.test(value), {
    message: "passwordWeak",
  })

export const OTP_LENGTH = 6

export const otpSchema = z
  .string()
  .length(OTP_LENGTH, { message: "otpIncomplete" })
  .regex(/^\d+$/, { message: "otpIncomplete" })

export const registerSchema = z
  .object({
    name: z.string().trim().min(2, { message: "required" }),
    email: emailSchema,
    phone: phoneSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "passwordsDontMatch",
    path: ["confirmPassword"],
  })

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, { message: "required" }),
})

export const forgotPasswordSchema = z.object({
  email: emailSchema,
})

export const resetPasswordSchema = z
  .object({
    code: otpSchema,
    newPassword: passwordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "passwordsDontMatch",
    path: ["confirmPassword"],
  })

export type LoginFormValues = z.infer<typeof loginSchema>
export type RegisterFormValues = z.infer<typeof registerSchema>
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>
export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>
