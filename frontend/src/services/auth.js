import axios from 'axios'
const baseUrl = '/auth'

const getUser = async () => {
  const response = await axios.get(`${baseUrl}/authenticated`)
  return response.data
}

export default {
  getUser,
}
