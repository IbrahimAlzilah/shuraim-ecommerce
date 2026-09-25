import type { Customer } from "@rawnaq/types"

import { mockAccounts, mockSessions } from "./mock-auth-data"

export async function getCurrentUser(token: string | null): Promise<Customer | null> {
  if (!token) {
    return null
  }

  const accountId = mockSessions.get(token)
  const account = mockAccounts.find((a) => a.id === accountId)

  if (!account) {
    return null
  }

  const { password, ...user } = account
  void password

  return user
}
