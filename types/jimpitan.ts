export interface Jimpitan {
  id: string
  village: Village
  block: string
  assign: Assign
}

export interface Assign {
  id: string
  email: string
  name: string
  villageId: string
  createdAt: Date
  updatedAt: Date
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
