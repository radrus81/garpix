// import { OPEN_MODAL, CLOSE_MODAL } from '../actions/actionTypes'

const initialState = {
  authors: [
    {
      id: 1,
      family: 'Фримен',
      name: 'Эрик',
    },
    {
      id: 2,
      family: 'Браун',
      name: 'Этан',
    },
  ],
}

export default function modalReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
