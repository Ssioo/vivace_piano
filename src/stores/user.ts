import { makeAutoObservable } from 'mobx'
import { KEY_TOKEN } from '../infras/storage'
import { User } from '../models/user'

class UserStore {
  token: string | null = 'asdasd'//null
  profile: User | null = null

  get isAuthed() {
    return !!this.token
  }

  constructor() {
    makeAutoObservable(this)
  }

  setToken(token: string) {
    this.token = token
    localStorage.setItem(KEY_TOKEN, token)
  }

  logout() {
    this.token = null
    this.profile = null
    localStorage.removeItem(KEY_TOKEN)
  }
}

export const userStore = new UserStore()
