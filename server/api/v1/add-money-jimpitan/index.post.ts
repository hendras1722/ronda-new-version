import prisma from '~/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const data = await readBody(event)
    const create = await prisma.moneyJimpitan.create({
      data,
    })

    return {
      message: 'Success',
      data: create,
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
