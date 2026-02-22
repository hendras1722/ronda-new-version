import { defineMongooseModel } from '#nuxt/mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface Jimpitan {
  idJimpitan: string;
  idUser: string;
  money: string
  idBlock: string
  createdAt: Date
  updatedAt: Date
}

export const JimpitanSchema = defineMongooseModel<Jimpitan>({
  name: "Jimpitan",
  schema: {
    idJimpitan: { type: String, required: true, index: true, default: uuidv4, unique: true },
    idUser: { type: String, required: true, unique: true, ref: 'User' },
    money: { type: String, required: true },
    idBlock: { type: String, required: true, ref: 'Block' },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
  }
})