import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import planReducer from './reducers/planReducer'
import currentPlanReducer from './reducers/currentPlanReducer'
import userReducer from './reducers/userReducer'

const reducer = combineReducers({
  plans: planReducer,
  currentPlan: currentPlanReducer,
  user: userReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
)

export default store