import { DEMO_RESET_CODE, findAccountByEmail } from "./mock-auth-data"

export async function resetPassword(
  email: string,
  code: string,
  newPassword: string
): Promise<void> {
  if (code !== DEMO_RESET_CODE) {
    throw new Error("invalidCode")
  }

  const account = findAccountByEmail(email)

  if (!account) {
    throw new Error("accountNotFound")
  }

  account.password = newPassword
}
