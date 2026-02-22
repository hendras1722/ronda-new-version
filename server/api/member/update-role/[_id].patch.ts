export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }
    const id = getRouterParam(event, "_id")
    const body = await readBody(event)
    const SINGLE_ROLES = ["ketua", "bendahara", "sekretaris"]

    if (SINGLE_ROLES.includes(body.role)) {
      await LoginSchema.updateMany(
        {
          role: body.role,
          idUser: { $ne: id }
        },
        {
          $set: {
            role: "user",
            updatedAt: new Date()
          }
        }
      )
    }

    const member = await LoginSchema.findOneAndUpdate(
      { idUser: id },
      {
        $set: {
          role: body.role,
          updatedAt: new Date()
        }
      },
      { new: true }
    )
      .populate({
        path: "block",
        select: "idBlock name"
      })
      .lean({ virtuals: true })

    if (!member) {
      setResponseStatus(event, 404)
      return helperResponseError("Member not found")
    }
    const memberObj = { ...member, password: undefined, role: undefined }

    return helperResponseSuccess("Update member success", memberObj)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})