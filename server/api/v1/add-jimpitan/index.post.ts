import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const exisitingJimpitan = await prisma.jimpitan.findMany({
      where: {
        AND: [
          {
            villageId: body.villageId,
            block: { mode: 'insensitive', contains: body.block },
          },
        ],
      },
    })
    if (exisitingJimpitan.length > 0) throw new Error('Block exisiting')
    const user = await prisma.jimpitan.create({
      data: {
        villageId: body.villageId,
        block: body.block,
        assignId: '',
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
          message: 'Failed to create jimpitan',
          error: error.message || 'Internal Server Error',
        },
      }
    }
  }
})
