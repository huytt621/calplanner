import axios from 'axios'

export const useResource = (baseUrl) => {
  const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
  }

  const get = async (id) => {
    const response = await axios.get(`${baseUrl}/${id}`)
    return response.data
  }

  const create = async (newPlan) => {
    const response = await axios.post(baseUrl, newPlan)
    return response.data
  }

  const update = async (id, updatedPlan) => {
    const response = await axios.put(`${baseUrl}/${id}`, updatedPlan)
    return response.data
  }

  return {
    getAll,
    get,
    create,
    update,
  }
}
