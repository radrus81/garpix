import React from 'react'
import { TextField } from '@material-ui/core'
import { Field } from 'redux-form'

const FieldNameBook = ({ input, meta: { touched, error, warning } }) => {
  return (
    <TextField
      error={error || !touched ? true : false}
      helperText={error}
      variant="outlined"
      margin="normal"
      fullWidth
      id="title"
      label="Название книги"
      name="title"
      autoFocus
      onChange={input.onChange}
      value={input.value ? input.value : ''}
    />
  )
}

const InputNameBook = () => {
  return <Field component={FieldNameBook} name="title" />
}

export default InputNameBook
