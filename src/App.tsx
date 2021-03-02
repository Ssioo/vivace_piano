import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import { AuthRoute } from './components/auth-router'
import { observer } from 'mobx-react-lite'
import { userStore } from './stores/user'

const Home = lazy(() => import('./screens/home'))
const Members = lazy(() => import('./screens/members'))
const Login = lazy(() => import('./screens/login'))

const App = observer(() => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path='/' component={Home} />
          <AuthRoute exact path='/login' authenticated={!userStore.isAuthed} component={Login} />
          <AuthRoute exact path='/members' authenticated={userStore.isAuthed} component={Members} />
          <Redirect path='*' to='/'/>
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
})

export default App
