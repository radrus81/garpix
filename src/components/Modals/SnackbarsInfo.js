import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import { makeStyles } from '@material-ui/core/styles'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}))

const SnackbarsInfo = ({
  isShowSnackbarsInfo,
  message,
  messageStyle,
  closeSnackbarsInfo,
}) => {
  const classes = useStyles()

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    closeSnackbarsInfo(false)
  }
  return (
    <div className={classes.root}>
      <Snackbar
        open={isShowSnackbarsInfo}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={messageStyle}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default SnackbarsInfo
