import { endOfDay, startOfDay } from 'date-fns'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  try {
    const params: any = await getQuery(event)
    const getMoney = await prisma.moneyJimpitan.findMany({
      where: {
        id: params.id,
        villageId: params.villageId || '',
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

    const getJimpitan = await prisma.jimpitan.findMany({
      where: {
        villageId: params.villageId || '',
      },
      select: {
        id: true,
        village: true,
        block: true,
        // assign: true,
      },
    })

    const result = getJimpitan.map((jimpitan) => {
      if (getMoney.length > 0) {
        const money = getMoney.find(
          (money) => money.block.toLowerCase() === jimpitan.block.toLowerCase()
        )
        console.log(money, 'inimoney')
        return {
          ...jimpitan,
          money: money ? money.money : 0,
          take: money ? money.user : null,
        }
      }
      return {
        ...jimpitan,
        money: 0,
        take: 0,
      }
    })

    return {
      statusCode: 200,
      data: { jimpitan: result },
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
