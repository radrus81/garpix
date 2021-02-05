import { CLOSE_MODAL, OPEN_MODAL } from './actionTypes'

// export function openModal(typeInfo) {
//   //здесь срабатывает
//   return async (dispatch) => {
//     dispatch(openModal2())
//   }
// }

export const openModal = (typeInfo) => {
  console.log('66666')
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
