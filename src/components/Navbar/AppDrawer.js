import React from 'react'
import { Drawer, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { NavLink, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Home, Book, SupervisedUserCircle } from '@material-ui/icons'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
})

const AppDrawer = ({ isOpen, location, sections, onCloseDrawer }) => {
  const classes = useStyles()
  return (
    <Drawer open={isOpen} docker="false" onClose={onCloseDrawer}>
      {sections.map(({ url, title }) => (
        <ListItem
          className={classes.list}
          button
          key={title}
          component={NavLink}
          to={url}
          selected={location.pathname === url ? true : false}
        >
          <ListItemIcon>
            {url === '/' ? (
              <Home />
            ) : url === '/books' ? (
              <Book />
            ) : (
              <SupervisedUserCircle />
            )}
          </ListItemIcon>
          <ListItemText onClick={onCloseDrawer} primary={title} />
        </ListItem>
      ))}
    </Drawer>
  )
}

export default withRouter(AppDrawer)
