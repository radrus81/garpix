import React from 'react'
import { Route, Switch } from 'react-router-dom'

import MainPage from '../components/MainPage/MainPage'
import Authors from '../components/Authors/Authors'
import Books from '../components/Books/Books'

const Routes = () => {
  return (
    <div className="container">
      <Switch>
        <Route component={Authors} path="/authors" />
        <Route component={Books} path="/books" />
        <Route component={MainPage} path="/" />
      </Switch>
    </div>
  )
}

export default Routes
