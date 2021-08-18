import userService from '../services/user'

export const initializeUser = async id => {
  const user = await userService.get(id)
  return async dispatch => {
    dispatch({
      type: 'NEW_USER',
      data: user
    })
  }
}

export const createUser = async newUser => {
  const user = await userService.create(newUser)
  return async dispatch => {
    dispatch({
      type: 'NEW_USER',
      data: user
    })
  }
}

const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'NEW_USER':
      return action.data
    default:
      return state
  }
}

export default userReducer