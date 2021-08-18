import planService from '../services/plans'

export const setCurrentPlan = id => {
  return async dispatch => {
    const plan = await planService.get(id)
    dispatch({
      type: 'SET_PLAN',
      data: plan
    })
  }
}

const currentPlanReducer = (state = null, action) => {
  switch (action.type) {
    case 'SET_PLAN':
      return action.data
    default:
      return state
  }
}

export default currentPlanReducer