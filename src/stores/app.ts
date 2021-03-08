import { makeAutoObservable } from 'mobx'
import { WINDOW_HEIGHT, WINDOW_WIDTH } from '../infras/constants'

class AppStore {
  loading = false
  isDrawerOpen = false
  title = 'VIVACE'
  windowWidth = WINDOW_WIDTH
  windowHeight = WINDOW_HEIGHT

  constructor() {
    makeAutoObservable(this)
  }
}

export const appStore = new AppStore()
