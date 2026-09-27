import type { Customer } from "@rawnaq/types"

import {
  createSession,
  findAccountByEmail,
  mockAccounts,
} from "./mock-auth-data"

export interface RegisterInput {
  name: string
  email: string
  phone: string
  password: string
}

export interface RegisterResult {
  user: Customer
  token: string
}

export async function register(input: RegisterInput): Promise<RegisterResult> {
  if (findAccountByEmail(input.email)) {
    throw new Error("emailTaken")
  }

  const account = {
    id: `demo-user-${Date.now()}`,
    name: input.name,
    email: input.email,
    phone: input.phone,
    password: input.password,
    addresses: [],
  }

  mockAccounts.push(account)

  const { password, ...user } = account
  void password

  return { user, token: createSession(account.id) }
}
