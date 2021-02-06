import {
  SET_AUTHORS,
  SET_NEW_AUTHOR,
  SET_DATA_FOR_EDIT_AUTHOR,
} from '../actions/actionTypes'

const initialState = {
  initialValues: {},
  authors: [],
}

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHORS:
      return {
        ...state,
        authors: action.authors,
      }
    case SET_NEW_AUTHOR:
      const cloneAutors = JSON.parse(JSON.stringify(state.authors))
      cloneAutors.push(action.newAuthor)
      return {
        ...state,
        authors: cloneAutors,
      }
    case SET_DATA_FOR_EDIT_AUTHOR:
      return {
        ...state,
        initialValues: action.dataForEditAuthor,
      }
    default:
      return state
  }
}
