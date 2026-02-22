export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }
    const body = await readBody(event)
    const member = await LoginSchema.create(body)

    if (!member) {
      setResponseStatus(event, 404)
      return helperResponseError("Member not found")
    }

    const memberObj = member.toObject()

    return helperResponseSuccess("Get member success", memberObj)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})