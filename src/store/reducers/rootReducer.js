import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import addEditModal from './modalReducer'
//import shackbars from './snackbarsInfoReducer'

export default combineReducers({
  form: formReducer,
  addEditModal,
})
