import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  ListItemText,
  ListItem,
  IconButton,
} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import { NavLink, withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}))

const Navbar = ({ location }) => {
  const classes = useStyles()
  const sections = [
    { title: 'Главная', url: '/' },
    { title: 'Книги', url: '/books' },
    { title: 'Авторы', url: '/authors' },
  ]
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Garpix
          </Typography>
          <Toolbar
            component="nav"
            variant="dense"
            className={classes.toolbarSecondary}
          >
            {sections.map(({ url, title }) => (
              <ListItem
                button
                key={title}
                component={NavLink}
                to={url}
                selected={location.pathname === url ? true : false}
              >
                <ListItemText primary={title} />
              </ListItem>
            ))}
          </Toolbar>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withRouter(Navbar)
