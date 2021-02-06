import React from 'react'
import { TextField } from '@material-ui/core'
import { Field } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  family: {
    margin: theme.spacing(2, 0, 2),
  },
}))

const FieldFamily = ({ input, meta: { touched, error, warning } }) => {
  const classes = useStyles()
  return (
    <TextField
      error={error ? true : false}
      helperText={error}
      variant="outlined"
      fullWidth
      label="Фамилия"
      type="text"
      id="family"
      className={classes.family}
      onChange={input.onChange}
      value={input.value ? input.value : ''}
    />
  )
}

const InputFamily = () => {
  return <Field component={FieldFamily} name="family" />
}

export default InputFamily
