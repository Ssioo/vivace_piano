import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Title } from '../styles/common'

const LoginScreen = () => {
  const history = useHistory()

  return (
    <div>
      <Title>
        Log In
      </Title>
      <Button
        onClick={() => {
          history.goBack()
        }}
      >
        로그인
      </Button>
    </div>
  )
}

export default LoginScreen
