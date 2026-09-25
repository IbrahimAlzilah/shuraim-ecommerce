export function slugify(input: string): string {
  return input
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, "-")
    .replace(/^-+|-+$/g, "")
}

export function truncate(input: string, maxLength: number): string {
  return input.length > maxLength ? `${input.slice(0, maxLength)}…` : input
}

const SAUDI_PHONE_REGEX = /^(?:\+?966|0)?5\d{8}$/
const OMANI_PHONE_REGEX = /^(?:\+?968|00968)?[79]\d{7}$/
const GCC_PHONE_REGEX = /^(?:\+?968|\+?966|\+?971|\+?965|\+?974|\+?973|0)?\d{7,10}$/
const YEMENI_PHONE_REGEX = /^(?:\+?967|00967)?7\d{8}$/

export function isSaudiPhoneNumber(input: string): boolean {
  return SAUDI_PHONE_REGEX.test(input.replace(/\s|-/g, ""))
}

export function isOmaniPhoneNumber(input: string): boolean {
  return OMANI_PHONE_REGEX.test(input.replace(/\s|-/g, ""))
}

export function isGccPhoneNumber(input: string): boolean {
  return GCC_PHONE_REGEX.test(input.replace(/\s|-/g, ""))
}

export function isYemeniPhoneNumber(input: string): boolean {
  return YEMENI_PHONE_REGEX.test(input.replace(/\s|-/g, ""))
}

