import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, CardContent, Card } from '@material-ui/core'
import { Field } from 'redux-form'
import InputFamily from '../ui/InputFamily'
import InputName from '../ui/InputName'

import FormButtons from '../ui/FormButtons'

const useStyles = makeStyles({
  root: {
    height: 460,
  },
})

const AuthorForm = ({ typeInfo, authors, closeAddEditModal, handleSubmit }) => {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {typeInfo === 'addAuthor'
            ? 'Добавить автора'
            : 'Редактировать автора'}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Field component="input" type="hidden" name="id" />
          <InputFamily />
          <InputName />
          <FormButtons closeAddEditModal={closeAddEditModal} />
        </form>
      </CardContent>
    </Card>
  )
}

export default AuthorForm
