import { SHOW_SHACKBARS, CLOSE_SHACKBARS } from '../actions/actionTypes'

const initialState = {
  isShowSnackbarsInfo: false,
  message: '',
  messageStyle: 'info',
}

export default function snackbarsInfoReducer(state = initialState, action) {
  switch (action.type) {
    case SHOW_SHACKBARS:
      return {
        ...state,
        isShowSnackbarsInfo: true,
        message: action.message,
        messageStyle: action.messageStyle,
      }
    case CLOSE_SHACKBARS:
      return initialState

    default:
      return state
  }
}
