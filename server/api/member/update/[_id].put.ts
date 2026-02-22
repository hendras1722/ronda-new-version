export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }
    const id = getRouterParam(event, "_id")
    const body = await readBody(event)
    const member = await LoginSchema.findOneAndUpdate(
      { idUser: id },
      { ...body, updatedAt: new Date() },
      { new: true }
    )
    if (!member) {
      setResponseStatus(event, 404)
      return helperResponseError("Member not found")
    }
    const memberObj = { ...member.toObject(), password: undefined, role: undefined }

    return helperResponseSuccess("Update member success", memberObj)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})