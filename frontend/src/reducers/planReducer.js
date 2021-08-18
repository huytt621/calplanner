import planService from '../services/plans'

export const initializePlans = () => {
  return async dispatch => {
    const plans = await planService.getAll()
    dispatch({
      type: 'INIT_PLANS',
      data: plans
    })
  }
}

export const editPlan = (id, newPlan) => {
  return async dispatch => {
    dispatch({
      type: 'EDIT_PLAN',
      id: id,
      data: newPlan
    })
  }
}

const planReducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_PLANS':
      return action.data
    case 'EDIT_PLAN':
      return state.map(p => p.id !== action.id ? p : action.data)
    default:
      return state
  }
}

export default planReducer