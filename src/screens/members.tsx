import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { membersStore } from '../stores/members'
import { Member } from '../models/user'
import { Title } from '../styles/common'

const MembersScreen = () => {
  useEffect(() => {
    membersStore.fetchMembers()
  }, [])

  return (
    <div>
      <Title>
        Members
      </Title>
      <MemberListView />
    </div>
  )
}

const MemberListView = observer(() => {
  return (
    <div>
      {membersStore.members.map((m) => (
        <MemberItemView member={m} key={m.id}/>
      ))}
    </div>
  )
})

const MemberItemView: React.FC<{ member: Member }> = ({ member }) => (
  <div>
    {member.name} {member.phone}
  </div>
)

export default MembersScreen
