import userService from '../services/user'

export const initializeUser = id => {
  return async dispatch => {
    const user = await userService.get(id)
    dispatch({
      type: 'NEW_USER',
      data: user
    })
  }
}

export const createUser = newUser => {
  return async dispatch => {
    const user = await userService.create(newUser)
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