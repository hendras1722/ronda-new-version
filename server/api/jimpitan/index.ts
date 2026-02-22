export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }

    const query = getQuery(event)

    const start = new Date(query.start as string)
    start.setHours(0, 0, 0, 0)

    const end = new Date(query.end as string)
    end.setHours(23, 59, 59, 999)
    const jimpitan = await JimpitanSchema.aggregate([
      {
        $match: {
          createdAt: {
            $gte: start,
            $lte: end
          }
        }
      },
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
          localField: 'idBlock',
          foreignField: 'idBlock',
          as: 'block'
        }
      },
      {
        $unwind: {
          path: '$block',
          preserveNullAndEmptyArrays: true
        }
      }
    ])

    if (!jimpitan) {
      setResponseStatus(event, 404)
      return helperResponseError("Jimpitan not found")
    }

    const jimpitanObj = jimpitan

    return helperResponseSuccess("Get jimpitan success", jimpitanObj)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})