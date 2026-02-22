import { defineMongooseModel } from '#nuxt/mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface Register {
  idUser: string;
  name: string;
  phone: string;
  email: string;
  password: string;
  role: string;
  idBlock: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}

export const RegisterSchema = defineMongooseModel<Register>({
  name: 'register',
  schema: {
    idUser: {
      type: String,
      default: uuidv4,
      unique: true,
      index: true,
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },
    role: {
      type: String,
      default: 'user'
    },
    idBlock: {
      type: String,
      ref: 'block'
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
    },
    deletedAt: {
      type: Date,
    },
  },
})