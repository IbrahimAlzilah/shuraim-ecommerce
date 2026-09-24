export interface Address {
  recipientName?: string
  phone?: string
  line1: string
  line2?: string
  city: string
  region?: string
  postalCode?: string
  country: string
}

export interface Customer {
  id: string
  name: string
  email: string
  phone?: string
  addresses: Address[]
}
