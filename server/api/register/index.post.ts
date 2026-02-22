import { RegisterSchema } from "~~/server/models/register.schema"
import { helperResponseError, helperResponseSuccess } from "~~/server/utils/helper"
import { createHash } from 'node:crypto'


export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { name, phone, email, password, idBlock } = body

    const checkRegister = await RegisterSchema.findOne({ email })
    if (checkRegister) {
      setResponseStatus(event, 409)
      return helperResponseError("Wating for verification")
    }

    const hashPassword = createHash('sha256').update(password).digest('hex')
    const register = await RegisterSchema.create({
      name,
      phone,
      email,
      password: hashPassword,
      role: 'user',
      idBlock
    })

    if (!register) {
      setResponseStatus(event, 404)
      return helperResponseError("Register not found")
    }
    return helperResponseSuccess("Register has been created", {
      data: {
        message: "User waiting for verification"
      }
    })
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})