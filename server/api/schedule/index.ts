import { helperResponseError, helperResponseSuccess } from "~~/server/utils/helper"

export default defineEventHandler(async (event) => {
  const { token } = helperResponseUnauthorized(event)
  if (!token) {
    setResponseStatus(event, 401)
    return helperResponseError("Unauthorized")
  }

  const getSchedule = await RondaSchema.aggregate([
    {
      $lookup: {
        from: 'users',
        localField: 'idUser',
        foreignField: 'idUser',
        as: 'user'
      }
    },
    {
      $unwind: {
        path: '$user',
        preserveNullAndEmptyArrays: true
      }
    },
    {
      $lookup: {
        from: 'blocks',
        localField: 'user.idBlock',
        foreignField: 'idBlock',
        as: 'block'
      }
    },
    {
      $unwind: {
        path: '$block',
        preserveNullAndEmptyArrays: true
      }
    },
  ])

  if (!getSchedule) {
    setResponseStatus(event, 404)
    return helperResponseError("Schedule not found")
  }

  return helperResponseSuccess("Get schedule success", getSchedule)
})