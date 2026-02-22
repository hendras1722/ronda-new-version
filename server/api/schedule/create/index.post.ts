import { helperResponseError, helperResponseSuccess } from "~~/server/utils/helper"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { token } = helperResponseUnauthorized(event)
  if (!token) {
    setResponseStatus(event, 401)
    return helperResponseError("Unauthorized")
  }

  const checkScheduleUser = await RondaSchema.find({ idUser: body.idUser })
  if (checkScheduleUser.length > 0) {
    setResponseStatus(event, 404)
    return helperResponseError("Schedule already exists")
  }

  const createSchedule = await RondaSchema.create(body)
  return helperResponseSuccess("Create schedule success", createSchedule)
})