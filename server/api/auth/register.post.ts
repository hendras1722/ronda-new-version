import prisma from '@/utils/prisma'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, password } = body

    const user: { data: { id: string; email: string } } = await $fetch(
      'https://auth.syahendra.com/v1/auth/register',
      {
        method: 'POST',
        body: {
          email,
          password,
        },
      }
    )

    const insertedUser = await prisma.user.create({
      data: {
        email: user.data.email,
        idUser: user.data.id,
      },
    })
    if (!insertedUser) {
      event.context.statusCode = 500
      return {
        statusCode: 500,
        body: { message: 'Failed to create user in database' },
      }
    }

    return {
      message: 'Registration successful',
      data: null,
    }
  } catch (error) {
    event.context.statusCode = 500
    console.error('Error in registration handler:', error)
    return {
      statusCode: 500,
      body: { message: 'Internal Server Error' },
    }
  }
})
