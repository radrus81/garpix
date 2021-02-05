import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import authors from './authorsReducer'
import books from './booksReducer'
import addEditModal from './modalReducer'
import shackbars from './snackbarsInfoReducer'

export default combineReducers({
  form: formReducer,
  authors,
  books,
  addEditModal,
  shackbars,
})
