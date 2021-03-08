import { makeAutoObservable } from 'mobx'
import { KEY_TOKEN } from '../infras/storage'
import { User } from '../models/user'
import { userApi } from '../apis/user'
import * as baseApi from '../apis/base'

class UserStore {
  token: string | null = null
  profile: User | null = null

  get hasToken() {
    return !!this.token
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
