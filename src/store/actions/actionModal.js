import { CLOSE_MODAL, OPEN_MODAL } from './actionTypes'
import { setDataForEditBook } from './actionBooks'
import { setDataForEditAuthor } from './actionAuthor'

export const openModal = (typeInfo) => {
  return (dispatch) => {
    if (typeInfo === 'addBook') {
      const initialValues = {
        title: '',
        author_id: '',
        year: null,
        image: null,
      }
      dispatch(setDataForEditBook(initialValues))
    }
    if (typeInfo === 'addAuthor') {
      const initialValues = {
        family: '',
        name: '',
      }
      dispatch(setDataForEditAuthor(initialValues))
    }
    dispatch(openModalLocal(typeInfo))
  }
}

const openModalLocal = (typeInfo) => {
  return {
    type: OPEN_MODAL,
    typeInfo,
  }
}

export function closeAddEditModal() {
  return {
    type: CLOSE_MODAL,
  }
}
