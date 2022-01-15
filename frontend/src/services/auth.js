import axios from 'axios'

const getUser = async () => {
  return await axios.get('/auth/user')
}

export default { getUser }
