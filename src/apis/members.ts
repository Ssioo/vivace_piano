import { BaseApi } from './base'
import { GroupType, Member, Role } from '../models/user'
import { ApiError } from './error'

class MembersApi extends BaseApi {
  async getMembers(): Promise<Member[]> {
    const res = await this.get<Member[]>('/members')
    if (res.status !== 200) throw new ApiError(res)
    return res.data
  }

  async register(name: string, phone: string, generations: number[], roles: Role[], group: GroupType) {
    const res = await this.post('/members', {
      name,
      phone,
      generations,
      roles,
      group,
    })
    if (res.status !== 200) throw new ApiError(res)
    return true
  }
}

export const membersApi = new MembersApi()
