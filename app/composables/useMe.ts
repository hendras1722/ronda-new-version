import type { GetMe } from "~/type/getMe"
import type { Response } from "~/type/response"

export const useMe = defineStore('getMe', () => {
  const me = useState<Response<GetMe> | null>('token', () => null)

  const setMe = (data: Response<GetMe>) => {
    me.value = data
  }

  return {
    me,
    setMe
  }
})