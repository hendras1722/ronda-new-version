export default defineEventHandler(async (event) => {
  try {
    // const query = getQuery(event)
    // const { date } = query

    // const filter: Record<string, any> = {}

    // if (date) {
    //   const start = new Date(date as string)
    //   start.setHours(0, 0, 0, 0)

    //   const end = new Date(date as string)
    //   end.setHours(23, 59, 59, 999)

    //   filter.createdAt = {
    //     $gte: start,
    //     $lte: end,
    //   }
    // }

    const blocks = await BlocksSchema.find()
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