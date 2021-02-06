import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/Navbar/Navbar'
import AppDrawer from './components/Navbar/AppDrawer'
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

  const [isOpenDrawer, setIsOpenDrawer] = useState(false)
  const sections = [
    { title: 'Главная', url: '/' },
    { title: 'Книги', url: '/books' },
    { title: 'Авторы', url: '/authors' },
  ]

  return (
    <BrowserRouter>
      <AppDrawer
        isOpen={isOpenDrawer}
        sections={sections}
        onCloseDrawer={() => setIsOpenDrawer(false)}
      />
      <Navbar sections={sections} openDrawer={() => setIsOpenDrawer(true)} />
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
