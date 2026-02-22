import { defineMongooseModel } from '#nuxt/mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface Ronda {
  idRonda: string
  idUser: string
  days: string
  createdAt: Date
  updatedAt: Date
}

export const RondaSchema = defineMongooseModel<Ronda>({
  name: "Ronda",
  schema: {
    idRonda: { type: String, required: true, index: true, default: uuidv4, unique: true },
    idUser: { type: String, required: true, unique: true, ref: 'User' },
    days: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
})