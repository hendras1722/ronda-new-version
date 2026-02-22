import { defineMongooseModel } from '#nuxt/mongoose'
import { v4 as uuidv4 } from 'uuid'

export interface Login {
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

export const LoginSchema = defineMongooseModel<Login>({
  name: 'user',
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
      ref: 'Blocks'
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


LoginSchema.schema.virtual("block", {
  ref: "Blocks",
  localField: "idBlock",
  foreignField: "idBlock",
  justOne: true
})

LoginSchema.schema.set("toJSON", { virtuals: true })
LoginSchema.schema.set("toObject", { virtuals: true })