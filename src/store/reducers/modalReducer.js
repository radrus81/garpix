import { OPEN_MODAL, CLOSE_MODAL } from '../actions/actionTypes'

const initialState = {
  isOpenAddEditModal: false,
  typeInfo: null,
}

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        isOpenAddEditModal: true,
        typeInfo: action.typeInfo,
      }
    case CLOSE_MODAL:
      return initialState

    default:
      return state
  }
}
