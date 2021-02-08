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

const Navbar = ({ location, sections, openDrawer }) => {
  const classes = useStyles()

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
            onClick={openDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Garpix
          </Typography>

          <Toolbar component="nav" variant="dense">
            {sections.map(({ url, title }) => (
              <ListItem
                button
                key={title}
                component={NavLink}
                to={url}
                // selected={location.pathname === url ? true : false}
                exact
                activeStyle={{
                  textDecoration: 'underline',
                }}
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
