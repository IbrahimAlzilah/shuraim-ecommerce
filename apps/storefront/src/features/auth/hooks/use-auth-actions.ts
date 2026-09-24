import { useCallback } from "react"

import { login as loginRequest, loginWithPhone as loginWithPhoneRequest, type LoginInput } from "../api/login"
import { logout as logoutRequest } from "../api/logout"
import {
  register as registerRequest,
  type RegisterInput,
} from "../api/register"
import { useAuthStore } from "../store/auth-store"

export function useAuthActions() {
  const setSession = useAuthStore((state) => state.setSession)
  const clearSession = useAuthStore((state) => state.clearSession)
  const token = useAuthStore((state) => state.token)

  const login = useCallback(
    async (input: LoginInput) => {
      const result = await loginRequest(input)
      setSession(result.token, result.user)
      return result.user
    },
    [setSession]
  )

  const loginWithPhone = useCallback(
    async (phone: string) => {
      const result = await loginWithPhoneRequest(phone)
      setSession(result.token, result.user)
      return result.user
    },
    [setSession]
  )

  const register = useCallback(
    async (input: RegisterInput) => {
      const result = await registerRequest(input)
      setSession(result.token, result.user)
      return result.user
    },
    [setSession]
  )

  const logout = useCallback(async () => {
    await logoutRequest(token)
    clearSession()
  }, [token, clearSession])

  return { login, loginWithPhone, register, logout }
}
