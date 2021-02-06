import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  Box,
  Button,
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}))

const ConfirmDialog = ({ id, isOpen, message, handleOk, handleCancel }) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="xs"
        aria-labelledby="confirmation-dialog-title"
        open={isOpen}
      >
        <DialogTitle id="confirmation-dialog-title">Внимание!</DialogTitle>
        <DialogContent dividers>{message}</DialogContent>
        <DialogActions>
          <Button
            autoFocus
            onClick={handleCancel}
            variant="contained"
            color="primary"
          >
            Отмена
          </Button>
          <Button
            onClick={() => handleOk(id)}
            variant="contained"
            color="secondary"
          >
            Удалить
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  )
}
export default ConfirmDialog
