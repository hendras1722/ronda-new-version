import Jimpitan from '~/pages/jimpitan.vue'
import prisma from '~/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const getJimpitan = await prisma.jimpitan.findMany({
      select: {
        id: true,
        village: true,
        block: true,
        assign: true,
      },
    })

    return {
      statusCode: 200,
      data: { jimpitan: getJimpitan },
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
