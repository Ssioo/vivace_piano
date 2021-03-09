import { Member } from '../models/user'
import { makeAutoObservable } from 'mobx'
import { membersApi } from '../apis/members'
import { showToast } from '../components/snack-bar'

class MembersStore {
  members: Member[] = []

  constructor() {
    makeAutoObservable(this)
  }

  async fetchMembers() {
    try {
      this.members = await membersApi.getMembers()
    } catch (e) {
      showToast(e)
      console.log(e)
    }
  }
}

export const membersStore = new MembersStore()
