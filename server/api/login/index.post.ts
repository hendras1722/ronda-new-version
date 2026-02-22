import { LoginSchema } from "~~/server/models/login.schema"
import { helperResponseError, helperResponseSuccess } from "~~/server/utils/helper"
import { createHash } from 'node:crypto'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { email, password } = body
  const checkRegister = await RegisterSchema.findOne({ email })
  const checkEmail = await LoginSchema.findOne({ email })

  if (!checkEmail) {
    return helperResponseError("Email not found")
  }

  if (checkRegister) {
    return helperResponseError("Account is waiting for verification")
  }

  const passwordHash = checkEmail.password
  const encodePassword = createHash('sha256').update(password).digest('hex')

  if (encodePassword !== passwordHash) {
    return helperResponseError("Password not match")
  }

  setCookie(event, 'token', generateToken(checkEmail))
  return helperResponseSuccess("Login success", {
    token: generateToken(checkEmail)
  })
})