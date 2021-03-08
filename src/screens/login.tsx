import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Title } from '../styles/common'
import { userStore } from '../stores/user'
import { TextFieldsOutlined } from '@material-ui/icons'
import { Button, Container, TextField } from '@material-ui/core'
import { VivaceContainer } from '../components/app-bar'

const LoginScreen = () => {
  const history = useHistory()

  const [phone, setPhone] = useState('')
  const [pwd, setPwd] = useState('')
  const [isValidPhone, setValidPhone] = useState(true)
  const [isValidPwd, setValidPwd] = useState(true)

  return (
    <VivaceContainer>
      <Title>
        Log In
      </Title>
      <div>
        <TextField
          value={phone}
          label='휴대폰 번호'
          variant='outlined'
          fullWidth
          error={!isValidPhone}
          helperText='ex) 01012341234'
          margin='dense'
          onChange={({ currentTarget }) => {
            const newPhone = currentTarget.value
            setPhone(newPhone)
            if (newPhone.length === 0 || newPhone.length > 11) setValidPhone(false)
            else setValidPhone(true)
          }}
        />
      </div>
      <div>
        <TextField
          value={pwd}
          label='비밀번호'
          type='password'
          variant='outlined'
          margin='dense'
          fullWidth
          error={!isValidPwd}
          onChange={({ currentTarget }) => {
            const newPwd = currentTarget.value
            setPwd(newPwd)
            if (newPwd.length === 0) setValidPwd(false)
            else setValidPwd(true)
          }}
        />
      </div>
      <Button
        variant='contained'
        disableElevation
        color='primary'
        onClick={async () => {
          if (!isValidPwd || !isValidPhone) {
            alert('휴대폰 번호 또는 비밀번호를 확인해주세요.')
            return
          }
          const res = await userStore.tryLogin(phone, pwd)
          if (res) {
            const name = await userStore.getProfile()
            alert(`${name}님 환영합니다.`)
            history.replace('/')
          }
        }}
      >
        로그인
      </Button>
    </VivaceContainer>
  )
}

export default LoginScreen
