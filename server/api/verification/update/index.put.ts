import { RegisterSchema } from "~~/server/models/register.schema"
import { helperResponseError, helperResponseSuccess } from "~~/server/utils/helper"

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { id, status } = body

    const checkRegister = await RegisterSchema.findOne({ idUser: id })
    if (!checkRegister) {
      setResponseStatus(event, 404)
      return helperResponseError("Account not found")
    }

    if (status === 'accept') {
      const registerUser = await LoginSchema.create({
        idUser: checkRegister.idUser,
        email: checkRegister.email,
        password: checkRegister.password,
        role: checkRegister.role,
        name: checkRegister.name,
        phone: checkRegister.phone,
        idBlock: checkRegister.idBlock,
      })
      if (!registerUser) {
        setResponseStatus(event, 404)
        return helperResponseError("Register not found")
      }
    }

    const deleteRegister = await RegisterSchema.deleteOne({ idUser: id })

    if (!deleteRegister) {
      setResponseStatus(event, 404)
      return helperResponseError("Register not found")
    }

    return helperResponseSuccess("Register has been created")
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})