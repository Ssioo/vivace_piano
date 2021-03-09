import { makeAutoObservable } from 'mobx'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../infras/constants'

class AppStore {
  loading = false
  isDrawerOpen = false
  isRoot = true
  title = 'VIVACE'
  windowWidth = WINDOW_WIDTH
  windowHeight = WINDOW_HEIGHT
  isToastShowing = false
  toast: string | null = null

  constructor() {
    makeAutoObservable(this)
  }
}

export const appStore = new AppStore()
