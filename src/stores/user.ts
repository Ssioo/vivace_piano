import { makeAutoObservable } from 'mobx'
import { KEY_TOKEN } from '../infras/storage'
import { Role, User } from '../models/user'
import { userApi } from '../apis/user'

class UserStore {
  token: string | null = null
  profile: User | null = null

  get hasToken() {
    return !!this.token
  }

  get isAdmin() {
    return this.profile?.roles.some((r) => r !== Role.COMMON) ?? false
  }

  constructor() {
    makeAutoObservable(this)
  }

  setToken(token: string) {
    this.token = token
    localStorage.setItem(KEY_TOKEN, token)
  }

  async tryLogin(phone: string, pwd: string) {
    try {
      const res = await userApi.signIn(phone, pwd)
      this.setToken(res.token)
      return true
    } catch (e) {
      console.log(e)
      alert(e)
    }
  }

  async getProfile() {
    try {
      this.profile = await userApi.getProfile()
      return this.profile.name
    } catch (e) {
      console.log(e)
    }
  }

  logout() {
    this.token = null
    this.profile = null
    localStorage.removeItem(KEY_TOKEN)
  }
}

export const userStore = new UserStore()
