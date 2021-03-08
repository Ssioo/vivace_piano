import React from 'react'
import { observer } from 'mobx-react-lite'
import { appStore } from '../stores/app'
import { CircularProgress } from '@material-ui/core'
import { WINDOW_WIDTH } from '../infras/constants'

export const LoadingIndicator = observer(() => {
  if (!appStore.loading) return null
  return (
    <>
      <div
        style={{
          position: 'absolute',
          zIndex: 99,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: '#ffffff80',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          zIndex: 100,
          transform: 'translate(-50%,-50%)',
        }}
      >
        <CircularProgress variant='indeterminate' />
      </div>
    </>
  )
})
