import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Routes from './routes/Routes'
import AddEditModal from './containers/Modals/AddEditModal'
import SnackbarsInfo from './containers/SnackbarsInfo'
import { loadBooks } from './store/actions/actionBooks'

const App = ({ loadBooks }) => {
  useEffect(() => {
    loadBooks()
  }, [loadBooks])

  return (
    <BrowserRouter>
      <Navbar />
      <Routes />
      <AddEditModal />
      <SnackbarsInfo />
    </BrowserRouter>
  )
}

const mapDispatchToProps = (dispatch) => ({
  loadBooks: () => dispatch(loadBooks()),
})

export default connect(null, mapDispatchToProps)(App)
