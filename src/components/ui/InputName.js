import React from 'react'
import { TextField } from '@material-ui/core'
import { Field } from 'redux-form'

const FieldName = ({ input, meta: { touched, error, warning } }) => {
  return (
    <TextField
      error={error ? true : false}
      helperText={error}
      variant="outlined"
      fullWidth
      label="Имя"
      type="text"
      id="name"
      onChange={input.onChange}
      value={input.value ? input.value : ''}
    />
  )
}

const InputName = () => {
  return <Field component={FieldName} name="name" />
}

export default InputName
