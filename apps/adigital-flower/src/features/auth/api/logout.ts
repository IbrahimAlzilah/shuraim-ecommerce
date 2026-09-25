import { mockSessions } from "./mock-auth-data"

export async function logout(token: string | null): Promise<void> {
  if (token) {
    mockSessions.delete(token)
  }
}
