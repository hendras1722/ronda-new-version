import { defineMongooseModel } from '#nuxt/mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface Incoming {
  idIncoming: string;
  idUser: string;
  amount: string
  description: string
  date: Date
  type: string
  createdAt: Date
  updatedAt: Date
}

export const IncomingSchema = defineMongooseModel<Incoming>({
  name: "Incoming",
  schema: {
    idIncoming: { type: String, required: true, index: true, default: uuidv4, unique: true },
    idUser: { type: String, required: true, ref: 'User' },
    amount: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    type: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
})