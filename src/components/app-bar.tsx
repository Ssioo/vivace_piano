import { AppBar, Container, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core'
import { appStore } from '../stores/app'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React from 'react'
import { observer } from 'mobx-react-lite'

export const VivaceTitleBar = observer(() => {

  const TitleContent = () => (
    <>
      <IconButton
        color='inherit'
        aria-label='Open Drawer'
        edge='start'
        onClick={() => {
          if (appStore.isRoot)
            appStore.isDrawerOpen = true
          else {
            history.back()
          }
        }}>
        {appStore.isRoot ? <MenuIcon/> : <ArrowBackIosIcon/>}
      </IconButton>
      <Typography variant='h6' noWrap>
        {appStore.title || 'VIVACE'}
      </Typography>
    </>
  )

  return (
    <AppBar
      position='fixed'
      elevation={0}
      color='transparent'
      style={{ maxHeight: 48, minHeight: 48 }}
    >
      <Hidden smUp>
        <AppBar
          position='fixed'
          elevation={0}
          color='transparent'
          style={{ maxHeight: 48, minHeight: 48 }}
        >
          <Toolbar style={{ maxHeight: 48, minHeight: 48 }}>
            <TitleContent />
          </Toolbar>
        </AppBar>
      </Hidden>
      <Hidden xsDown>
        <AppBar
          position='fixed'
          elevation={0}
          color='transparent'
          style={{ maxHeight: 48, minHeight: 48, width: appStore.windowWidth, marginLeft: 120 }}
        >
          <Toolbar style={{ maxHeight: 48, minHeight: 48, width: appStore.windowWidth - 120, marginLeft: 120 }}>
            <TitleContent />
          </Toolbar>
        </AppBar>
      </Hidden>
    </AppBar>
  )
})

export const VivaceContainer = (props) => (
  <Container maxWidth={props.size ?? 'sm'} style={{ marginTop: 48 }}>
    {props.children}
  </Container>
)
