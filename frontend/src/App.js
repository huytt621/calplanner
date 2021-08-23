import {
  Switch, 
  Route,
  useRouteMatch
} from "react-router-dom" 
import { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux"
import './index.css'
import planService from './services/plans'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'
import Profile from './components/Profile'
import EditablePlan from './components/EditablePlan'
import AllPlans from "./components/AllPlans"
import { initializeUser } from "./reducers/userReducer"
import { setCurrentPlan } from "./reducers/currentPlanReducer"
import { editPlan } from "./reducers/planReducer"
import CreatePlanForm from "./components/CreatePlanForm"

const App = () => {

  const dispatch = useDispatch()
  const plan = useSelector(state => state.currentPlan)
  const user = useSelector(state => state.user)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPlanappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      planService.setToken(user.token)
      dispatch(initializeUser(user.id))
    }
  }, [dispatch])

  const changePlan = async action => {
    const newPlan = {...plan}
    action(newPlan)
    dispatch(editPlan(newPlan.id, newPlan))
    dispatch(setCurrentPlan(newPlan.id))
  }

  const match = useRouteMatch('/plans/:id')
  if (!plan && match) {
    dispatch(setCurrentPlan(match.params.id))
  }

  return (
    <div className="App font-sans flex flex-col">
      <NavBar user={user} />
      <Switch>
        <Route path="/plans/new">
          <CreatePlanForm />
        </Route>
        <Route path="/plans/:id">
          {!plan ? <div></div> : <EditablePlan plan={plan} editPlan={changePlan} />}
        </Route>
        <Route path="/plans">
          <AllPlans />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/users/:id">
          <Profile user={user} />
        </Route>
        <Route path="/">
          <Home user={user} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
