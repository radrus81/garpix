import { CLOSE_MODAL, OPEN_MODAL } from './actionTypes'

// export function openModal(typeInfo) {
//   //здесь срабатывает
//   return async (dispatch) => {
//     dispatch(openModal2())
//   }
// }

export const openModal = (typeInfo) => {
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
