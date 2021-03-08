export interface Jwt {
  token: string
}

export interface User extends Member {

}

export interface Member {
  key: string
  name: string
  phone: string
  generation: number[]
  role: Role[]
  group: GroupType
  createdAt: string
  expiredAt: string | null
}

export enum Role {
  COMMON = '부원',
  LEADER = '회장',
  SUB_LEADER = '부회장',
  EXECUTIVE = '임원',
  FINANCIAL = '총무',
}

export enum GroupType {
  VIVACE = '비바체',
  CANTABILE = '칸타빌레',
  NONE = '없음'
}
