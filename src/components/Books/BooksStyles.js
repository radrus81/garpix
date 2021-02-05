import { makeStyles } from '@material-ui/core/styles'

const BooksStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(2),
  },
  container: {
    maxHeight: '100%',
    marginTop: theme.spacing(2),
  },
  button: {
    margin: theme.spacing(1),
  },
  media: {
    height: 110,
    width: 90,
    margin: '0 auto',
  },
}))

export default BooksStyles
