import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from '../components/MainPage/MainPage'
import Authors from '../containers/Authors/Authors'
import Books from '../containers/Books/Books'

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route component={Authors} path="/authors" />
        <Route component={Books} path="/books" />
        <Route component={MainPage} path="/" exact />
        <Route
          render={() => (
            <h1 style={{ color: 'red', textAlign: 'center' }}>404 not found</h1>
          )}
        />
      </Switch>
    </div>
  )
}

export default Routes
