import { AppBar, Container, IconButton, Toolbar, Typography } from '@material-ui/core'
import { appStore } from '../stores/app'
import MenuIcon from '@material-ui/icons/Menu'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import React from 'react'
import { observer } from 'mobx-react-lite'

export const VivaceTitleBar = observer(() => {
  return (
    <AppBar
      position='fixed'
      elevation={0}
      color='transparent'
      style={{ maxHeight: 48, minHeight: 48 }}
    >
      <Toolbar style={{ maxHeight: 48, minHeight: 48 }}>
        <IconButton
          color='inherit'
          aria-label='Open Drawer'
          onClick={() => {
            if (appStore.isRoot)
              appStore.isDrawerOpen = true
            else {
              history.back()
            }
          }}>
          {appStore.isRoot ? <MenuIcon/> : <ArrowBackIosIcon />}
        </IconButton>
        <Typography variant='h6' noWrap>
          {appStore.title || 'VIVACE'}
        </Typography>
      </Toolbar>
    </AppBar>
  )
})

export const VivaceContainer = (props) => (
  <Container maxWidth={props.size ?? 'sm'} style={{ marginTop: 48 }}>
    {props.children}
  </Container>
)
