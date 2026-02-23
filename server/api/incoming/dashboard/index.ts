export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }

    const query = getQuery(event)


    const filter: Record<string, unknown> = {}
    const filterJimpitan: Record<string, unknown> = {}

    if (query.start && query.end) {
      const start = new Date(query.start as string)
      start.setHours(0, 0, 0, 0)

      const end = new Date(query.end as string)
      end.setHours(23, 59, 59, 999)

      filter.createdAt = {
        $gte: start,
        $lte: end,
      }
      filterJimpitan.date = {
        $gte: start,
        $lte: end,
      }
    }
    console.log(query, filterJimpitan)

    const incoming = await IncomingSchema.aggregate([
      {
        $match: filterJimpitan
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

    const jimpitan = await JimpitanSchema.aggregate([
      {
        $match: filter
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

    if (!incoming) {
      setResponseStatus(event, 404)
      return helperResponseError("Incoming not found")
    }

    console.log(incoming)

    const incomingObj = incoming.reduce((acc, item) => {
      if (item.type === 'inbound') {
        acc += Number(item.amount)
      }
      return acc
    }, 0)
    const outcomingObj = incoming.reduce((acc, item) => {
      if (item.type === 'outbound') {
        acc += Number(item.amount)
      }
      return acc
    }, 0)
    const totalJimpitan = jimpitan.reduce((acc, item) => {
      acc += Number(item.money)
      return acc
    }, 0)
    const allTotal = (incomingObj + totalJimpitan) - outcomingObj

    return helperResponseSuccess("Get incoming success", { inbound: incomingObj, outbound: outcomingObj, totalJimpitan, allTotal })
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})