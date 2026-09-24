import type { Customer } from "@rawnaq/types"

// Stand-in "backend" until a real auth API exists. This is a plain in-memory
// module, not a database: it's called from client components, so it lives in
// the current browser tab's memory and resets on a full page reload. No
// password hashing, no real email delivery. Never model real auth this way.
export interface MockAccount extends Customer {
  password: string
}

export const mockAccounts: MockAccount[] = []

export const mockSessions = new Map<string, string>() // token -> account id

// Every password-reset request "succeeds" with this fixed demo code instead
// of sending a real email, so the flow stays testable without a mail
// provider.
export const DEMO_RESET_CODE = "123456"

export function findAccountByEmail(email: string) {
  return mockAccounts.find(
    (account) => account.email.toLowerCase() === email.toLowerCase()
  )
}

export function findOrCreateAccountByPhone(phone: string): { user: Customer; token: string } {
  let account = mockAccounts.find((a) => a.phone === phone)
  if (!account) {
    const id = `cust-${Date.now()}`
    account = {
      id,
      name: "عميل شريم",
      email: `${phone}@rawnaq.internal`,
      phone,
      addresses: [],
      password: "otp-login",
    }
    mockAccounts.push(account)
  }
  const { password, ...user } = account
  void password
  return { user, token: createSession(account.id) }
}

export function createSession(accountId: string): string {
  const token = `demo-session-${accountId}-${Date.now()}`
  mockSessions.set(token, accountId)
  return token
}
