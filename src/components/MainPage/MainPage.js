import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import Link from '@material-ui/core/Link'
import { makeStyles, Container, CssBaseline } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  mt: {
    marginTop: theme.spacing(2),
  },
  linkBook: {
    marginRight: theme.spacing(2),
  },
}))

const MainPage = () => {
  const classes = useStyles()
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" className={classes.mt}>
        <Link component={RouterLink} to="/books" className={classes.linkBook}>
          Книги
        </Link>
        <Link component={RouterLink} to="/authors">
          Авторы
        </Link>
      </Container>
    </>
  )
}

export default MainPage
