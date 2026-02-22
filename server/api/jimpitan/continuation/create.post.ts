export default defineEventHandler(async (event) => {
  try {
    const { token } = helperResponseUnauthorized(event)
    if (!token) {
      setResponseStatus(event, 401)
      return helperResponseError("Unauthorized")
    }
    const tokenUser = verifyToken(token)
    const body = await readBody(event)
    const {
      money,
      idBlock,
      createdAt_start,
      createdAt_end,
    } = body

    const start = new Date(createdAt_start)
    start.setHours(0, 0, 0, 0)

    const end = new Date(createdAt_end)
    end.setHours(0, 0, 0, 0)

    if (start > end) {
      throw createError({
        statusCode: 400,
        statusMessage: "createdAt_start harus <= createdAt_end",
      })
    }

    const existingRecords = await JimpitanSchema.find({
      idBlock,
      createdAt: {
        $gte: start,
        $lte: end
      }
    }).select('createdAt')

    const existingDates = new Set(
      existingRecords.map(record => {
        const date = new Date(record.createdAt)
        date.setHours(0, 0, 0, 0)
        return date.getTime()
      })
    )

    const data = []
    const current = new Date(start)
    const skippedDates = []

    while (current.getTime() <= end.getTime()) {
      const currentTimestamp = current.getTime()

      if (existingDates.has(currentTimestamp)) {
        skippedDates.push(new Date(current))
        current.setDate(current.getDate() + 1)
        continue
      }

      data.push({
        money,
        idBlock,
        idUser: tokenUser.id,
        createdAt: new Date(current),
        updatedAt: new Date(current),
      })

      current.setDate(current.getDate() + 1)
    }

    if (skippedDates.length > 0) {
      console.log('Skipped duplicate dates:', skippedDates)
    }

    if (data.length === 0) {
      throw createError({
        statusCode: 400,
        statusMessage: "Semua tanggal sudah ada data untuk block ini",
      })
    }


    const result = await JimpitanSchema.insertMany(data)
    return helperResponseSuccess("Jimpitan created successfully", result)
  } catch (error) {
    console.log(error)
    if (error instanceof Error) {
      return helperResponseError(error.message)
    }
    return helperResponseError("Internal server error")
  }
})
