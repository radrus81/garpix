import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
  DialogContent,
  Dialog,
  Typography,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  media: {
    width: 140,
    height: 170,
    margin: '0 auto',
  },
})

const DetailBookModal = ({ isOpen, handleCloseInfoModal, detailBook }) => {
  const classes = useStyles()
  return (
    <Dialog
      onClose={handleCloseInfoModal}
      aria-labelledby="simple-dialog-title"
      open={isOpen}
    >
      <DialogContent dividers>
        <CardMedia
          className={classes.media}
          image={
            detailBook.image
              ? detailBook.image
              : 'https://salsk.sidex.ru/images_offers/2797/2797583/dnevnik_shkolnii_space_1.jpg'
          }
          title="Contemplative Reptile"
        />
        <CardContent className={classes.root}>
          <Typography gutterBottom variant="h5" component="h2">
            {detailBook.title}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Автор: {detailBook.family_author} {detailBook.name_author}
          </Typography>
          <Typography gutterBottom variant="h6" component="h2">
            Первая публикация: {detailBook.year}
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

export default DetailBookModal
