export interface User {
  id: string
  name: string
  village: Village
  email: string
}

export interface Village {
  id: string
  address: string
  rt: number
  rw: number
  urbanVillage: string
  subdistrict: string
  regency: string
  createdAt: Date
  updatedAt: Date
}
