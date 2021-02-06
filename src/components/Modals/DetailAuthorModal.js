import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  DialogContent,
  Dialog,
  Typography,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  media: {
    height: 170,
  },
})

const DetailAuthorModal = ({ isOpen, handleCloseInfoModal, detailAuthor }) => {
  const classes = useStyles()
  return (
    <Dialog
      onClose={handleCloseInfoModal}
      aria-labelledby="simple-dialog-title"
      open={isOpen}
    >
      <DialogContent dividers>
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h6" component="h2">
            Автор: {detailAuthor.family} {detailAuthor.name}
          </Typography>
        </CardContent>

        <CardActions>
          <Button
            size="small"
            color="primary"
            variant="contained"
            onClick={handleCloseInfoModal}
          >
            Закрыть
          </Button>
        </CardActions>
      </DialogContent>
    </Dialog>
  )
}

export default DetailAuthorModal
