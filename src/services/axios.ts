import axios from 'axios'
import { parseCookies } from 'nookies'

export function getAPIClient (ctx?: any) {
  const { 'catalogo-aulas-token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:5000/api'
  })

  api.interceptors.request.use(config => {
    return config
  })

  if (token) {
    api.defaults.headers[ 'Authorization' ] = `Bearer ${token}`
  }

  return api
}
