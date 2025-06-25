import prisma from '~/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const user = await prisma.user.findMany()
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
