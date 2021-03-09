import { observer } from 'mobx-react-lite'
import { appStore } from '../stores/app'
import { Button, Snackbar, SnackbarContent } from '@material-ui/core'

export const showToast = (message: string) => {
  appStore.toast = message
  appStore.isToastShowing = true
}

export const VivaceSnackBar = observer(() => {
  return (
    <Snackbar
      open={appStore.isToastShowing}
      autoHideDuration={3000}
      onClose={() => appStore.isToastShowing = false}
      onExit={() => appStore.toast = null}
      message={appStore.toast}
      anchorOrigin={{
        horizontal: 'center',
        vertical: 'bottom',
      }}
      action={
        <Button
          color='primary'
          onClick={() => {
            appStore.isToastShowing = false
          }}
        >
          닫기
        </Button>
      }
    />
  )
})
