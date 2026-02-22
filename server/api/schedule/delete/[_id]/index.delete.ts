import { helperResponseError, helperResponseSuccess, helperResponseUnauthorized } from "~~/server/utils/helper"

export default defineEventHandler(async (event) => {
  const id = await getRouterParams(event)
  const { token } = helperResponseUnauthorized(event)
  if (!token) {
    setResponseStatus(event, 401)
    return helperResponseError("Unauthorized")
  }

  const checkScheduleUser = await RondaSchema.findOneAndDelete({ idUser: id })
  if (!checkScheduleUser) {
    setResponseStatus(event, 404)
    return helperResponseError("Schedule not found", 404)
  }

  return helperResponseSuccess("Delete schedule success")
})