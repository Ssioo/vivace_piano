import { GridColumns } from '@material-ui/data-grid'

export interface Jwt {
  token: string
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

export interface User extends Member {

}

export interface Member {
  key: string
  name: string
  phone: string
  pwd: string
  univ: string
  department: string
  hakbun: number
  generations: number[]
  roles: Role[]
  group: GroupType
  birth: string
  createdAt: string
  expiredAt: string | null
  memo: string | null
}

export class Member {
  public static getAttributes(): GridColumns {
    return [
      {
        field: 'name', headerName: '이름', width: 130,
      },
      {
        field: 'phone', headerName: '휴대폰 번호', width: 150,
      },
      {
        field: 'pwd', headerName: '비밀번호', width: 80,
      },
      {
        field: 'univ', headerName: '대학교', width: 120,
      },
      {
        field: 'department', headerName: '학과', width: 160,
      },
      {
        field: 'hakbun', headerName: '학번', width: 40,
      },
      {
        field: 'birth', headerName: '생년월일', width: 100,
      }
    ]
  }
}
