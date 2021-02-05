import React from 'react'
import { Field } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles'
import { Select, FormControl, InputLabel } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '100%',
  },
}))

const FieldAuthor = ({ input }) => {
  const classes = useStyles()
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-native-simple">Автор книги</InputLabel>
      <Select
        native
        value={input.value}
        //onChange={handleChange}
        label="Автор книги"
        inputProps={{
          name: 'author_id',
          id: 'outlined-age-native-simple',
        }}
        onChange={input.onChange}
      >
        <option value={1}>Фримен Эрик </option>
        <option value={2}>Браун Этан</option>
      </Select>
    </FormControl>
  )
}

const SelectAuthor = () => {
  return <Field component={FieldAuthor} name="author_id" />
}

export default SelectAuthor
