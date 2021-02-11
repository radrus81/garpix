import axios from '../../axios/request'
import { showShackbars } from './actionSnackbarsInfo'
import { SET_BOOKS, SET_NEW_BOOK, SET_DATA_FOR_EDIT_BOOK } from './actionTypes'
import { openModal, closeAddEditModal } from './actionModal'

export function loadBooks() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/books.json`)
      let books = []
      if (data) {
        books = Object.keys(data).map((id) => ({ ...data[id], id }))
      }
      dispatch(setBooksToState(books))
    } catch (error) {
      dispatch(showShackbars(error, 'error'))
    }
  }
}

const setBooksToState = (books) => {
  return {
    type: SET_BOOKS,
    books,
  }
}

export function addNewBook(typeInfo, dataForm) {
  return async (dispatch, getState) => {
    const { books } = getState()
    const isBook = books.books.find((book) => book.title === dataForm.title)
    if (isBook) {
      dispatch(
        showShackbars(`Книга ${dataForm.title} уже есть в библиотеке`, 'error')
      )
      return
    }

    let message
    try {
      if (typeInfo === 'addBook') {
        dataForm.created_at = new Date().toLocaleDateString('ru-RU')
        const { data } = await axios.post(`/books.json`, dataForm)
        dispatch(setBook({ ...dataForm, id: data.name }))
        message = 'Книга добавлена успешно'
      } else {
        const id = dataForm.id
        delete dataForm.id
        await axios.put(`/books/${id}.json`, dataForm)
        dispatch(loadBooks())
        message = 'Книга отредактирована успешно'
      }
      dispatch(closeAddEditModal())
      dispatch(showShackbars(message, 'success'))
    } catch (error) {
      dispatch(showShackbars(error, 'error'))
    }
  }
}

const setBook = (newBook) => {
  return {
    type: SET_NEW_BOOK,
    newBook,
  }
}

export function editBook(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/books/${id}.json`)
      data.id = id
      dispatch(setDataForEditBook(data))
      dispatch(openModal('editBook'))
    } catch (error) {
      dispatch(showShackbars(error, 'error'))
    }
  }
}

export function setDataForEditBook(dataForEditBook) {
  return {
    type: SET_DATA_FOR_EDIT_BOOK,
    dataForEditBook,
  }
}

export function deleteBook(id) {
  return async (dispatch) => {
    try {
      await axios.delete(`/books/${id}.json`)
      dispatch(loadBooks())
      dispatch(showShackbars('Книга удалена успешно', 'success'))
    } catch (error) {
      dispatch(showShackbars(error, 'error'))
    }
  }
}
