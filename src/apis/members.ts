import { BaseApi } from './base'
import { GroupType, Member, Role } from '../models/user'
import { ApiError } from './error'

class MembersApi extends BaseApi {
  async getMembers(): Promise<Member[]> {
    const res = await this.get<Member[]>('/members')
    if (res.status !== 200) throw new ApiError(res)
    return res.data
  }

  async register(
    name: string,
    phone: string,
    birth: string,
    univ: string,
    department: string,
    grade: number,
    hakbun: number,
    generations: number[],
    roles: Role[],
    group: GroupType,
    memo: string,
  ) {
    const res = await this.post('/members', {
      name,
      phone,
      birth,
      univ,
      department,
      grade,
      hakbun,
      generations,
      roles,
      group,
      memo,
    })
    if (res.status !== 200) throw new ApiError(res)
    return true
  }
}

export const membersApi = new MembersApi()
