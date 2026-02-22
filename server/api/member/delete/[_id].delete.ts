export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }
    const id = getRouterParam(event, "_id")
    const member = await LoginSchema.findOneAndUpdate({ idUser: id }, { deletedAt: new Date() })
    if (!member) {
      setResponseStatus(event, 404)
      return helperResponseError("Member not found")
    }

    return helperResponseSuccess("Delete member success")
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})