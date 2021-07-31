import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/plans'

let token = null

const setToken = newToken => token = `bearer ${newToken}`

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const get = async id => {
  const response = await axios.get(`${baseUrl}/${id}`)
  return response.data
}

const create = async newPlan => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newPlan, config)
  return response.data
}

const update = async (id, updatedPlan) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(`${baseUrl}/${id}`, updatedPlan, config)
  return response.data
}

export default {
  getAll,
  get,
  create,
  update,
  setToken
}