import { observer } from 'mobx-react-lite'
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, SvgIconTypeMap } from '@material-ui/core'
import PermIdentityIcon from '@material-ui/icons/PermIdentity'
import HomeIcon from '@material-ui/icons/Home'
import React from 'react'
import { appStore } from '../stores/app'
import { userStore } from '../stores/user'
import { useHistory } from 'react-router-dom'
import { OverridableComponent } from '@material-ui/core/OverridableComponent'


const DrawerItem: React.FC<{
  title: string,
  Leading: OverridableComponent<SvgIconTypeMap>,
  onClick?: () => void
}> = ({ title, Leading, onClick }) => (
  <ListItem
    button
    onClick={() => {
      onClick?.()
      appStore.isDrawerOpen = false
    }}
  >
    <ListItemIcon>
      <Leading />
    </ListItemIcon>
    <ListItemText primary={title} />
  </ListItem>
)

export const DrawerSheet = observer(() => {
  const history = useHistory()

  const pushIfAbsent = (path: string) => {
    if (history.location.pathname !== path) history.push(path)
  }

  return (
    <Drawer
      anchor='left'
      open={appStore.isDrawerOpen}
      onClose={() => appStore.isDrawerOpen = false}
      variant={appStore.windowWidth > 768 ? 'permanent' : 'temporary'}
    >
      <List>
        <DrawerItem
          title='HOME'
          Leading={HomeIcon}
          onClick={() => pushIfAbsent('/')}
        />
        <Divider/>
        {!userStore.hasToken &&
          <DrawerItem
            title='로그인'
            Leading={PermIdentityIcon}
            onClick={() => pushIfAbsent('/login')}
          />}
        {userStore.hasToken && <>
          <DrawerItem
            title='멤버관리'
            Leading={PermIdentityIcon}
            onClick={() => pushIfAbsent('/members')}
          />
          <DrawerItem
            title='로그아웃'
            Leading={PermIdentityIcon}
            onClick={() => {
              if (confirm('로그아웃하시겠습니까?')) {
                userStore.logout()
                history.replace('/')
              }
            }}
          />
        </>}
      </List>
    </Drawer>
  )
})
