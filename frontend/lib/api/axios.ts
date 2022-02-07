import { API_URL } from '@lib/utils/const'
import Axios from 'axios'

export const axios = Axios.create({ baseURL: API_URL })
