import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorkerRegistration from './infras/service-worker-registration'

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

serviceWorkerRegistration.unregister()
