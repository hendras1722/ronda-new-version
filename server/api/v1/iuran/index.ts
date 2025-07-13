import { startOfMonth, subDays } from 'date-fns'
import prisma from '~/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const params = getQuery(event)
    const where: { villageId?: string; OR?: any; createdAt?: any } = {}

    if (typeof params.villageId === 'string' && params.villageId)
      where.villageId = params.villageId

    if (typeof params.name === 'string' && params.name)
      where.OR = [
        {
          user: {
            name: {
              contains: typeof params.name === 'string' ? params.name : '',
              mode: 'insensitive',
            },
          },
        },
      ]

    if (params.createdAt_start && params.createdAt_end) {
      where.createdAt = {
        gte: subDays(startOfMonth(new Date()), 1),
        lte: new Date(params.createdAt_end as string),
      }
    }
    const getIuran = await prisma.contribution.findMany({
      where,
      select: {
        id: true,
        userId: true,
        money: true,
        admission: true,
        village: true,
        user: {
          select: {
            name: true,
          },
        },
        createdAt: true,
      },
    })

    return {
      statusCode: 200,
      data: { iuran: getIuran },
    }
  } catch (error) {
    setResponseStatus(event, 400)
    if (error instanceof Error) {
      return {
        statusCode: 400,
        errors: {
          message: 'Failed to get iuran',
          error: error.message || 'Internal Server Error',
        },
      }
    }
  }
})
