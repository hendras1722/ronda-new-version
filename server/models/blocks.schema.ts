import { defineMongooseModel } from '#nuxt/mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface Blocks {
  idBlock: string;
  name: string
  createdAt: Date
  updatedAt: Date
}

export const BlocksSchema = defineMongooseModel<Blocks>({
  name: "Blocks",
  schema: {
    idBlock: { type: String, required: true, index: true, default: uuidv4, unique: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
})