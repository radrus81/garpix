import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import Routes from './routes/Routes'
import AddEditModal from './containers/Modals/AddEditModal'
import SnackbarsInfo from './containers/SnackbarsInfo'
import { loadAuthors } from './store/actions/actionAuthor'
import { loadBooks } from './store/actions/actionBooks'

const App = ({ loadBooks, loadAuthors }) => {
  useEffect(() => {
    loadAuthors()
    loadBooks()
  }, [loadAuthors, loadBooks])

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
  loadAuthors: () => dispatch(loadAuthors()),
  loadBooks: () => dispatch(loadBooks()),
})

export default connect(null, mapDispatchToProps)(App)
