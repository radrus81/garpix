import axios from 'axios'

const requestAxios = axios.create({
  baseURL: 'https://garpix-3d691-default-rtdb.firebaseio.com/',
})

export default requestAxios
