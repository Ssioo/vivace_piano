import { BaseApi } from './base'
import { Member } from '../models/user'
import { ApiError } from './error'

class MembersApi extends BaseApi {
  async getMembers(): Promise<Member[]> {
    const res = await this.get<Member[]>('/members')
    if (res.status !== 200) throw new ApiError(res)
    return res.data
  }
}

export const membersApi = new MembersApi()
