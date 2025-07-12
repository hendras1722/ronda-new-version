import { endOfDay, startOfDay } from 'date-fns'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  try {
    const params: any = await getQuery(event)
    const getMoney = await prisma.moneyJimpitan.findMany({
      where: {
        AND: [
          {
            block: { mode: 'insensitive', contains: params.block },
            villageId: params.villageId,
          },
        ],
        createdAt: {
          gte: startOfDay(new Date(params.createdAt)),
          lte: endOfDay(new Date(params.createdEnd)),
        },
      },
      select: {
        id: true,
        village: true,
        money: true,
        createdAt: true,
        villageId: true,
        user: true,
        block: true,
      },
    })
    return {
      statusCode: 200,
      data: { jimpitan: getMoney },
    }
  } catch (error) {
    setResponseStatus(event, 400)
    if (error instanceof Error) {
      return {
        statusCode: 400,
        errors: {
          message: 'Failed to get jimpitan',
          error: error.message || 'Internal Server Error',
        },
      }
    }
  }
})
