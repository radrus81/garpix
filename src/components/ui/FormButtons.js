import React from 'react'
import { Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  blockBtn: {
    display: 'flex',
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: '0 auto',
  },
  closeBtn: {
    marginLeft: theme.spacing(2),
  },
}))

const FormButtons = ({ closeAddEditModal }) => {
  const classes = useStyles()
  return (
    <Box className={classes.blockBtn}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
      >
        Сохранить
      </Button>
      <Button
        fullWidth
        variant="contained"
        color="secondary"
        className={classes.closeBtn}
        onClick={closeAddEditModal}
      >
        Закрыть
      </Button>
    </Box>
  )
}

export default FormButtons
