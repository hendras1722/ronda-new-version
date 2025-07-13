import { PrismaClient } from '~/generated/prisma'

const prisma = new PrismaClient()
export default defineEventHandler(async (event) => {
  try {
    const params = getQuery(event)
    const where: { villageId?: string; OR?: any; createdAt?: any } = {}

    if (typeof params.villageId === 'string' && params.villageId)
      where.villageId = params.villageId

    if (typeof params.search === 'string' && params.search)
      where.OR = [{ name: { contains: params.search, mode: 'insensitive' } }]

    if (params.createdAt_start && params.createdAt_end) {
      where.createdAt = {
        gte: new Date(params.createdAt_start as string),
        lte: new Date(params.createdAt_end as string),
      }
    }

    const user = await prisma.user.findMany({
      where,
      select: {
        id: true,
        name: true,
        village: true,
        email: true,
        createdAt: true,
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
          message: 'Failed to get user',
          error: error.message || 'Internal Server Error',
        },
      }
    }
  }
})
