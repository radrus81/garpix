import React from 'react'
import { TextField } from '@material-ui/core'
import { Field } from 'redux-form'

const FieldImage = ({ input }) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      label="Обложка книги"
      type="text"
      id="image"
      onChange={input.onChange}
      value={input.value ? input.value : ''}
    />
  )
}

const InputImage = () => {
  return <Field component={FieldImage} name="image" />
}

export default InputImage
