export interface Iuran {
  id: string
  userId: string
  money: string
  admission: string
  village: Village
  user: User
  createdAt: Date
}

export interface User {
  name: string
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
