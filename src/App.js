import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Routes from './routes/Routes'
import AddEditModal from './containers/Modals/AddEditModal'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <AddEditModal />
    </BrowserRouter>
  )
}

export default connect(null, null)(App)
