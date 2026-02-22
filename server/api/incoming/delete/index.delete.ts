export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }
    const { id } = getQuery(event)
    const incoming = await IncomingSchema.deleteOne({ idIncoming: id })
    if (!incoming) {
      setResponseStatus(event, 404)
      return helperResponseError("Incoming not found")
    }

    return helperResponseSuccess("Delete incoming success")
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})