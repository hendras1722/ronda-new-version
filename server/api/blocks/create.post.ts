
export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }
    const body = await readBody(event)
    const blocks = await BlocksSchema.create(body)

    if (!blocks) {
      setResponseStatus(event, 404)
      return helperResponseError("Blocks not found")
    }

    const blocksObj = blocks.toObject()

    return helperResponseSuccess("Get Blocks success", blocksObj)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})