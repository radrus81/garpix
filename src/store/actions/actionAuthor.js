import axios from '../../axios/request'
import { showShackbars } from './actionSnackbarsInfo'
import {
  SET_AUTHORS,
  SET_NEW_AUTHOR,
  SET_DATA_FOR_EDIT_AUTHOR,
} from './actionTypes'
import { openModal, closeAddEditModal } from './actionModal'
// import Authors from '../../containers/Authors/Authors'

export function loadAuthors() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/authors.json`)
      let authors = []
      if (data) {
        authors = Object.keys(data).map((id) => ({ ...data[id], id }))
      }
      dispatch(setAuthorsToState(authors))
    } catch (error) {
      dispatch(showShackbars(error, 'error'))
    }
  }
}

const setAuthorsToState = (authors) => {
  return {
    type: SET_AUTHORS,
    authors,
  }
}

export function addNewAuthor(typeInfo, dataForm) {
  return async (dispatch) => {
    let message
    try {
      if (typeInfo === 'addAuthor') {
        const { data } = await axios.post(`/authors.json`, dataForm)
        dispatch(setAuthor({ ...dataForm, id: data.name }))
        message = 'Автор успешно добавлен'
      } else {
        const id = dataForm.id
        delete dataForm.id
        await axios.put(`/authors/${id}.json`, dataForm)
        dispatch(loadAuthors())
        message = 'Автор успешно отредактирован'
      }
      dispatch(closeAddEditModal())
      dispatch(showShackbars(message, 'success'))
    } catch (error) {
      dispatch(showShackbars(error, 'error'))
    }
  }
}

const setAuthor = (newAuthor) => {
  return {
    type: SET_NEW_AUTHOR,
    newAuthor,
  }
}

export function editAuthor(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/authors/${id}.json`)
      data.id = id
      dispatch(setDataForEditAuthor(data))
      dispatch(openModal('editAuthor'))
    } catch (error) {
      dispatch(showShackbars(error, 'error'))
    }
  }
}

export function setDataForEditAuthor(dataForEditAuthor) {
  return {
    type: SET_DATA_FOR_EDIT_AUTHOR,
    dataForEditAuthor,
  }
}

export function deleteAuthor(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`/authors/${id}.json`)
      dispatch(loadAuthors())
      dispatch(showShackbars('Запись успешно удалена', 'success'))
    } catch (error) {
      dispatch(showShackbars(error, 'error'))
    }
  }
}
