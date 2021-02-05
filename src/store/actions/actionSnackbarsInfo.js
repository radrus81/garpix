import { SHOW_SHACKBARS, CLOSE_SHACKBARS } from './actionTypes'

export function showShackbars(message, messageStyle) {
  return {
    type: SHOW_SHACKBARS,
    message,
    messageStyle,
  }
}

export function closeSnackbarsInfo() {
  return {
    type: CLOSE_SHACKBARS,
  }
}
