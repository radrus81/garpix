import React from 'react'
import { TextField } from '@material-ui/core'
import { Field } from 'redux-form'

const FieldFirstPublic = ({ input, meta: { touched, error, warning } }) => {
  console.log(error)
  return (
    <TextField
      error={error ? true : false}
      helperText={error}
      variant="outlined"
      margin="normal"
      fullWidth
      label="Первая публикация"
      type="text"
      id="year"
      onChange={input.onChange}
      value={input.value ? input.value : ''}
    />
  )
}

const InputFirstPublic = () => {
  return <Field component={FieldFirstPublic} name="year" />
}

export default InputFirstPublic
