import { BaseApi } from './base'
import { ApiError } from './error'
import { GroupType, Jwt, Role, User } from '../models/user'

class UserApi extends BaseApi {
  async signIn(phone: string, pwd: string) {
    const res = await this.post<Jwt>('/user/signIn', {
      phone, pwd
    })
    if (res.status !== 200) throw new ApiError(res)
    return res.data
  }

  async getProfile() {
    const res = await this.get<User>('/user/me')
    if (res.status !== 200) throw new ApiError(res)
    return res.data
  }
}

export const userApi = new UserApi()
