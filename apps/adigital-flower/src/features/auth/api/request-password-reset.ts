import { DEMO_RESET_CODE } from "./mock-auth-data"

export interface RequestPasswordResetResult {
  email: string
  // Returned only because there is no real email delivery — a real
  // implementation must never return the reset code to the client.
  demoCode: string
}

export async function requestPasswordReset(
  email: string
): Promise<RequestPasswordResetResult> {
  return { email, demoCode: DEMO_RESET_CODE }
}
