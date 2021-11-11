import axios from 'axios';

const Api = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  headers: {
    // Accept:
    // 'application/json',
    // 'Content-Type': 'application/json',
    // 'Cache-Control': 'no-cache',
  },
  withCredentials: false,
})

Api.interceptors.response.use(
  async (response) => {
    return response.data
  },
  async (error) => {
    if (error.response.status === 401) {
      console.log('Need to login to access this feature')
    }
    return Promise.reject(error)
  }
)

export default Api