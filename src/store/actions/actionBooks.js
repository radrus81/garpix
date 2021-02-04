import axios from 'axios'
//import { showShackbars } from './actionSnackbarsInfo'
import { SET_DATA_FROM_BASE } from './actionTypes'

// import { formatDateYMDFromDate } from './helpers'

export function getListBooks() {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://https://garpix-3d691-default-rtdb.firebaseio.com/books.json`
      )
      dispatch(setDataFromBaseToState(response.data))
    } catch (error) {
      //dispatch(showShackbars(error, 'error'))
    }
  }
}

const setDataFromBaseToState = (dataFromBase) => {
  return {
    type: SET_DATA_FROM_BASE,
    dataFromBase,
  }
}
