export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }
    const query = getQuery(event)
    const { start, end } = query

    const filter: Record<string, any> = {}

    if (start && end) {
      const startDate = new Date(start as string)
      startDate.setUTCHours(0, 0, 0, 0)

      const endDate = new Date(end as string)
      endDate.setUTCHours(23, 59, 59, 999)

      filter.createdAt = {
        $gte: startDate,
        $lte: endDate,
      }
    }

    const blocks = await BlocksSchema.find(filter)
    if (!blocks) {
      setResponseStatus(event, 404)
      return helperResponseError("Blocks not found")
    }
    const blocksObj = blocks.map((block) => block.toObject())
    return helperResponseSuccess("Get blocks success", blocksObj)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})