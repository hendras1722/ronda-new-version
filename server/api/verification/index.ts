import { RegisterSchema } from "~~/server/models/register.schema"

export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)

    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }

    const register = await RegisterSchema.aggregate([
      {
        $lookup: {
          from: "blocks",
          localField: "idBlock",
          foreignField: "idBlock",
          as: "block"
        }
      },
      {
        $unwind: "$block"
      },
    ])

    if (!register) {
      setResponseStatus(event, 404)
      return helperResponseError("Register not found")
    }
    const registerObj = register
    return helperResponseSuccess("Get register success", registerObj)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})