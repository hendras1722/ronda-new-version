import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  try {
    const getSchedule = await prisma.schedule.findMany({
      select: {
        id: true,
        village: true,
        day: true,
        user: true,
      },
    })

    return {
      statusCode: 200,
      data: { jimpitan: getSchedule },
    }
  } catch (error) {
    setResponseStatus(event, 400)
    if (error instanceof Error) {
      return {
        statusCode: 400,
        errors: {
          message: 'Failed to get schedule',
          error: error.message || 'Internal Server Error',
        },
      }
    }
  }
})
