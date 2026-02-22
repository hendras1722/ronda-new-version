export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }
    const body = await readBody(event)
    const tokenUser = verifyToken(token)

    const existingRecords = await JimpitanSchema.find({
      idBlock: body.idBlock,
      createdAt: body.createdAt_start
    }).select('createdAt')

    if (existingRecords.length > 0) {
      setResponseStatus(event, 400)
      return helperResponseError("Jimpitan already exists")
    }

    const jimpitan = await JimpitanSchema.create({
      ...body,
      idUser: tokenUser.id
    })

    if (!jimpitan) {
      setResponseStatus(event, 404)
      return helperResponseError("Jimpitan not found")
    }

    const jimpitanObj = jimpitan.toObject()

    return helperResponseSuccess("Get jimpitan success", jimpitanObj)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})