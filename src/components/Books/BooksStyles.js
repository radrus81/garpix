import { makeStyles } from '@material-ui/core/styles'

const BooksStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  container: {
    maxHeight: 440,
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  media: {
    height: 140,
    width: 100,
    margin: '0 auto',
  },
}))

export default BooksStyles
