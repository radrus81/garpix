import { CLOSE_MODAL, OPEN_MODAL } from './actionTypes'
import { setDataForEditBook } from './actionBooks'

export const openModal = (typeInfo) => {
  return (dispatch) => {
    if (typeInfo === 'addBook') {
      const initialValues = {
        title: '',
        author_id: 1,
        year: null,
        image: null,
      }
      dispatch(setDataForEditBook(initialValues))
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
