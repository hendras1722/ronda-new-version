import prisma from '~/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const user = await prisma.user.create({
      data: {
        villageId: body.villageId,
        email: body.email,
        name: body.name,
        idUser: '',
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
          message: 'Failed to create user',
          error: error.message || 'Internal Server Error',
        },
      }
    }
  }
})
