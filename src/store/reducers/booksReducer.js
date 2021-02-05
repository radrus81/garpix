import {
  SET_BOOKS,
  SET_NEW_BOOK,
  SET_DATA_FOR_EDIT_BOOK,
} from '../actions/actionTypes'

const initialState = {
  initialValues: {
    title: '',
    author_id: 1,
    year: null,
    image: null,
  },
  books: [],
}

export default function bookReducer(state = initialState, action) {
  switch (action.type) {
    case SET_BOOKS:
      return {
        ...state,
        books: action.books,
      }
    case SET_NEW_BOOK:
      const cloneBook = JSON.parse(JSON.stringify(state.books))
      cloneBook.push(action.newBook)
      return {
        ...state,
        books: cloneBook,
      }
    case SET_DATA_FOR_EDIT_BOOK:
      return {
        ...state,
        initialValues: action.dataForEditBook,
      }
    default:
      return state
  }
}
