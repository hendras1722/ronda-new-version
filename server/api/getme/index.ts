import { helperResponseUnauthorized, helperResponseError, helperResponseSuccess } from "~~/server/utils/helper"

export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)

    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }

    const decodedToken = verifyToken(token as string)
    const checkUser = await LoginSchema.aggregate([
      { $match: { idUser: decodedToken.id, deletedAt: null } },
      {
        $lookup: {
          from: 'rondas',
          localField: 'idUser',
          foreignField: 'idUser',
          as: 'ronda'
        }
      },
      {
        $unwind: {
          path: '$ronda',
          preserveNullAndEmptyArrays: true
        }
      },
      // {
      //   $lookup: {
      //     from: 'users',
      //     localField: 'idUser',
      //     foreignField: 'idUser',
      //     as: 'user'
      //   }
      // },
      // {
      //   $unwind: {
      //     path: '$user',
      //     preserveNullAndEmptyArrays: true
      //   }
      // },
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
          password: 0
        }
      }
    ])

    if (!checkUser || checkUser.length === 0) {
      setResponseStatus(event, 404)
      return helperResponseError("User not found")
    }

    const user = checkUser[0]

    return helperResponseSuccess("Get me success", user)
  } catch (error: any) {
    console.log(error)

    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})