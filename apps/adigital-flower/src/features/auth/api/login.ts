import type { Customer } from "@rawnaq/types"

import { createSession, findAccountByEmail, findOrCreateAccountByPhone } from "./mock-auth-data"

export interface LoginInput {
  email: string
  password: string
}

export interface LoginResult {
  user: Customer
  token: string
}

export async function login(input: LoginInput): Promise<LoginResult> {
  const account = findAccountByEmail(input.email)

  if (!account || account.password !== input.password) {
    throw new Error("invalidCredentials")
  }

  const { password, ...user } = account
  void password

  return { user, token: createSession(account.id) }
}

export async function loginWithPhone(phone: string): Promise<LoginResult> {
  return findOrCreateAccountByPhone(phone)
}
