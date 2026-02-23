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
    const blocksObj = blocks.map((block) => block.toObject()).sort((a, b) => {
      const letterA = a.name.match(/[A-Z]+/i)?.[0] || ""
      const numberA = parseInt(a.name.match(/\d+/)?.[0] || "0")

      const letterB = b.name.match(/[A-Z]+/i)?.[0] || ""
      const numberB = parseInt(b.name.match(/\d+/)?.[0] || "0")

      if (letterA !== letterB) {
        return letterA.localeCompare(letterB)
      }

      return numberA - numberB
    })
    return helperResponseSuccess("Get blocks success", blocksObj)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})