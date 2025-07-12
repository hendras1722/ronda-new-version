import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const user = await prisma.schedule.create({
      data: {
        villageId: body.villageId,
        day: body.day,
        userId: body.userId,
      },
    })
    return {
      statusCode: 200,
      data: { user },
    }
  } catch (error) {
    setResponseStatus(event, 400)
    if (error instanceof Error) {
      return {
        statusCode: 400,
        errors: {
          message: 'Failed to create schedule',
          error: error.message || 'Internal Server Error',
        },
      }
    }
  }
})
