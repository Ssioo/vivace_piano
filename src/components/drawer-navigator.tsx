import { observer } from 'mobx-react-lite'
import { Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, SvgIconTypeMap } from '@material-ui/core'
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
      <Leading/>
    </ListItemIcon>
    <ListItemText primary={title}/>
  </ListItem>
)

const DrawerItemList = observer(() => {
  const history = useHistory()

  const pushIfAbsent = (path: string) => {
    if (history.location.pathname !== path) history.push(path)
  }

  return (
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
  )
})

export const DrawerSheet = observer(() => {
  return (
    <>
      <Hidden smUp>
        <Drawer
          anchor='left'
          open={appStore.isDrawerOpen}
          onClose={() => appStore.isDrawerOpen = false}
          variant='temporary'
          ModalProps={{
            keepMounted: true,
          }}
        >
          <DrawerItemList/>
        </Drawer>
      </Hidden>
      <Hidden xsDown>
        <Drawer
          anchor='left'
          open
          variant='permanent'
        >
          <DrawerItemList/>
        </Drawer>
      </Hidden>
    </>
  )
})
