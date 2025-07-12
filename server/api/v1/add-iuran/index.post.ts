import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const iuran = await prisma.contribution.create({
      data: {
        admission: body.admission,
        userId: body.userId,
        villageId: body.villageId,
        money: body.money,
      },
    })
    console.log(iuran)
    return {
      statusCode: 200,
      data: { body },
    }
  } catch (error) {
    setResponseStatus(event, 400)
    if (error instanceof Error) {
      return {
        statusCode: 400,
        errors: {
          message: 'Failed to create user',
          error: error.message || 'Internal Server Error',
        },
      }
    }
  }
})
