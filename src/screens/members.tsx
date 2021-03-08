import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { membersStore } from '../stores/members'
import { Member } from '../models/user'
import { Title } from '../styles/common'
import { VivaceContainer } from '../components/app-bar'

const MembersScreen = () => {
  useEffect(() => {
    membersStore.fetchMembers()
  }, [])

  return (
    <VivaceContainer>
      <Title>
        Members
      </Title>
      <MemberListView />
    </VivaceContainer>
  )
}

const MemberListView = observer(() => {
  return (
    <div>
      {membersStore.members.map((m) => (
        <MemberItemView member={m} key={m.key}/>
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
