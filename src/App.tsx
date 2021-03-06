import React, { lazy, Suspense, useEffect, useLayoutEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { AuthRoute } from './components/auth-router'
import { observer } from 'mobx-react-lite'
import { userStore } from './stores/user'
import { DrawerSheet } from './components/drawer-navigator'
import { VivaceTitleBar } from './components/app-bar'
import { appStore } from './stores/app'
import { LoadingIndicator } from './components/loading-indicator'
import { VivaceSnackBar } from './components/snack-bar'

const Home = lazy(() => import('./screens/home'))
const Members = lazy(() => import('./screens/members'))
const Login = lazy(() => import('./screens/login'))

const App = observer(() => {

  useEffect(() => {
    userStore.loadLastAuthInfo()
  }, [])

  useLayoutEffect(() => {
    const listener = () => {
      appStore.windowWidth = window.innerWidth
      appStore.windowHeight = window.innerHeight
    }
    window.addEventListener('resize', listener)
    return () => {
      window.removeEventListener('resize', listener)
    }
  }, [])

  return (
    <>
      <VivaceTitleBar />
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/login' component={Login}/>
            <AuthRoute exact path='/members' authenticated={userStore.isAdmin} isLogin={userStore.hasToken} component={Members}/>
            <Redirect path='*' to='/'/>
          </Switch>
        </Suspense>
        <DrawerSheet/>
      </BrowserRouter>
      <LoadingIndicator />
      <VivaceSnackBar />
    </>
  )
})

export default App
