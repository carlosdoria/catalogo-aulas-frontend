// import axios from 'axios'
// import { parseCookies } from 'nookies'

// const { 'catalogo-aulas-token': token } = parseCookies()

// export const api = axios.create({
//   baseURL: 'http://localhost:5000/api'
// })

// api.interceptors.request.use(config => {
//   console.log('config', config)
//   return config
// })

// if (token) {
//   api.defaults.headers[ 'Authorization' ] = `Bearer ${token}`
// }

import { getAPIClient } from './axios'

export const api = getAPIClient()
