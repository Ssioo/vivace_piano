import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { userStore } from '../stores/user'
import { Button, TextField } from '@material-ui/core'
import { VivaceContainer } from '../components/app-bar'
import { appStore } from '../stores/app'
import { KEY_LAST_USERID, KEY_LAST_USERPW } from '../infras/storage'
import { showToast } from '../components/snack-bar'

const LoginScreen = () => {
  const history = useHistory()

  const [phone, setPhone] = useState('')
  const [pwd, setPwd] = useState('')
  const [isValidPhone, setValidPhone] = useState(true)
  const [isValidPwd, setValidPwd] = useState(true)

  useEffect(() => {
    appStore.isRoot = false
    appStore.title = '로그인'
    const lastPhone = localStorage.getItem(KEY_LAST_USERID)
    const lastPwd = localStorage.getItem(KEY_LAST_USERPW)
    if (lastPhone !== null) setPhone(lastPhone)
    if (lastPwd !== null) setPwd(lastPwd)
  }, [])

  return (
    <VivaceContainer>
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
            showToast('휴대폰 번호 또는 비밀번호를 확인해주세요.')
            return
          }
          appStore.loading = true
          const res = await userStore.tryLogin(phone, pwd)
          if (res) {
            const name = await userStore.getProfile()
            appStore.loading = false
            showToast(`${name}님 환영합니다.`)
            history.replace('/')
          } else {
            appStore.loading = false
          }
        }}
      >
        로그인
      </Button>
    </VivaceContainer>
  )
}

export default LoginScreen
