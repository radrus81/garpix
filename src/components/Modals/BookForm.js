import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, CardContent, Card } from '@material-ui/core'
import { Field } from 'redux-form'
import InputNameBook from '../ui/InputNameBook'
import SelectAuthor from '../ui/SelectAuthor'
import InputFirstPublic from '../ui/InputFirstPublic'
import InputImage from '../ui/InputImage'
import FormButtons from '../ui/FormButtons'

const useStyles = makeStyles({
  root: {
    // width: '60%',
    height: 460,
  },
})

const BookForm = ({ typeInfo, authors, closeAddEditModal, handleSubmit }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {typeInfo === 'addBook' ? 'Добавить книгу' : 'Редактировать книгу'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Field component="input" type="hidden" name="id" />
          <InputNameBook />
          <SelectAuthor authors={authors} />
          <InputFirstPublic />
          <InputImage />
          <FormButtons closeAddEditModal={closeAddEditModal} />
        </form>
      </CardContent>
    </Card>
  )
}

export default BookForm
