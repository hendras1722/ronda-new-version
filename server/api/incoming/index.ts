export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }

    const query = getQuery(event)


    const filter: Record<string, unknown> = {}
    console.log(query)
    if (query.start && query.end) {
      const start = new Date(query.start as string)
      start.setHours(0, 0, 0, 0)

      const end = new Date(query.end as string)
      end.setHours(23, 59, 59, 999)

      filter.date = {
        $gte: start,
        $lte: end,
      }
    }
    const incoming = await IncomingSchema.aggregate([
      {
        $match: filter
      },
      {
        $lookup: {
          from: 'users',
          localField: 'idUser',
          foreignField: 'idUser',
          as: 'user',
          pipeline: [
            {
              $project: {
                password: 0,
                role: 0,
                email: 0,
                idUser: 0,
                phone: 0
              }
            }
          ]
        }
      },
      {
        $unwind: {
          path: '$user',
          preserveNullAndEmptyArrays: true
        }
      },
    ])

    if (!incoming) {
      setResponseStatus(event, 404)
      return helperResponseError("Incoming not found")
    }

    const incomingObj = incoming

    return helperResponseSuccess("Get incoming success", incomingObj)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})