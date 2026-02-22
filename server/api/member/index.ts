export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }
    const member = await LoginSchema.aggregate([
      { $match: { deletedAt: null } },
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
      },
      {
        $project: {
          password: 0,
        }
      }
    ])

    return helperResponseSuccess("Get member success", member)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})