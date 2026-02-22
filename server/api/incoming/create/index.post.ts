import { IncomingSchema } from "~~/server/models/incoming.schema"

export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }

    const body = await readBody(event)
    const { amount, idUser, description, date } = body
    const create = await IncomingSchema.create({
      amount,
      idUser,
      description,
      date
    })
    return helperResponseSuccess('Create incoming success', create)
  } catch (error) {
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError('Internal server error')
  }
})