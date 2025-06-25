import prisma from '~/utils/prisma'

import { ofetch } from 'ofetch'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const { email, password } = body
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (!existingUser) {
      setResponseStatus(event, 404)
      return {
        statusCode: 404,
        errors: { message: 'User not found' },
      }
    }
    const user: { data: { token: string; refreshToken: string } } =
      await ofetch('https://auth.syahendra.com/v1/auth/login', {
        method: 'POST',
        body: {
          email,
          password,
        },
      })
    console.log('User data:', user)
    setCookie(event, 'token', user.data.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    })

    setCookie(event, 'refreshToken', user.data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
    })
    return {
      message: 'Login successful',
      data: { token: user.data.token, refreshToken: user.data.refreshToken },
    }
  } catch (error) {
    setResponseStatus(event, 400)
    console.error('Error in login handler:', error)
    if (error instanceof Error) {
      console.error('Error message:', error.message)
      return {
        statusCode: 400,
        errors: {
          message: 'Login failed',
          error: error.message || 'Internal Server Error',
        },
      }
    }
  }
})
