import type { GetMe } from "~/type/getMe"
import type { Response } from "~/type/response"

export default defineNuxtPlugin(async () => {
  const route = useRoute()
  const cookie = useCookie('token')
  const me = useMe()
  try {
    if (!cookie.value) {
      throw new Error("Token not found")
    }
    const data = await $fetch<Response<GetMe>>('/api/getme', {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookie.value}`
      }
    })
    if (data?.status === 500) {
      throw new Error(data.message)
    }
    me.setMe(data)
  } catch (error) {
    if (!['/login', '/register'].includes(route.path)) {
      navigateTo('/login')
    }
  }
})