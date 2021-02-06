import React from 'react'
import { Field } from 'redux-form'
import { makeStyles } from '@material-ui/core/styles'
import {
  Select,
  FormControl,
  InputLabel,
  FormHelperText,
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: '100%',
  },
}))

const FieldAuthor = ({ input, authors, meta: { touched, error, warning } }) => {
  const classes = useStyles()
  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel htmlFor="outlined-age-native-simple">Автор книги</InputLabel>
      <Select
        error={error ? true : false}
        native
        value={input.value}
        label="Автор книги"
        inputProps={{
          name: 'author_id',
          id: 'outlined-age-native-simple',
        }}
        onChange={input.onChange}
      >
        <option aria-label="None" value="" />
        {authors.map((author) => {
          return (
            <option value={author.id} key={author.id}>
              {author.family} {author.name}
            </option>
          )
        })}
      </Select>
      {error ? <FormHelperText error={true}>{error}</FormHelperText> : null}
    </FormControl>
  )
}

const SelectAuthor = ({ authors }) => {
  return <Field component={FieldAuthor} name="author_id" authors={authors} />
}

export default SelectAuthor
