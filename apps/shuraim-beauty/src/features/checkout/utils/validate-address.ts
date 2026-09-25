import type { Address } from "@rawnaq/types"
import { isGccPhoneNumber } from "@rawnaq/utils"

export type AddressErrorCode = "required" | "invalidPhone"

export type AddressErrors = Partial<Record<keyof Address, AddressErrorCode>>

export function validateAddress(address: Partial<Address>): AddressErrors {
  const errors: AddressErrors = {}

  if (!address.recipientName?.trim()) {
    errors.recipientName = "required"
  }

  if (!address.phone || !isGccPhoneNumber(address.phone)) {
    errors.phone = "invalidPhone"
  }

  if (!address.line1?.trim()) {
    errors.line1 = "required"
  }

  if (!address.city?.trim()) {
    errors.city = "required"
  }

  if (!address.country?.trim()) {
    errors.country = "required"
  }

  return errors
}
