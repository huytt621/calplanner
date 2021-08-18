import {
  Switch, 
  Route,
  useRouteMatch
} from "react-router-dom" 
import { useState, useEffect } from 'react'
import planService from './services/plans'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'
import Profile from './components/Profile'
import PlansView from './components/PlansView'
import EditablePlan from './components/EditablePlan'
import { useSelector, useDispatch } from "react-redux"
import './index.css'
import { initializePlans, editPlan } from "./reducers/planReducer"
import { initializeUser } from "./reducers/userReducer"

const App = () => {

  const dispatch = useDispatch()
  const plans = useSelector(state => state.plans)
  const user = useSelector(state => state.user)

  const [plan, setPlan] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPlanappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      planService.setToken(user.token)
      dispatch(initializeUser(user.id))
    }
  }, [dispatch])

  useEffect(() => {
    dispatch(initializePlans())
  }, [dispatch])

  const changePlan = async action => {
    const newPlan = {...plan}
    action(newPlan)
    dispatch(editPlan(newPlan.id, newPlan))
  }

  const match = useRouteMatch('/plans/:id')
  if (!plan && match) {
    if (plans.length > 0) {
      setPlan(plans.find(p => p.id === match.params.id))
    } else {
      planService
        .get(match.params.id)
        .then(p => setPlan(p))
    }
  }

  return (
    <div className="App font-sans flex flex-col">
      <NavBar user={user} />
      <Switch>
        <Route path="/plans/:id">
          {!plan ? <div></div> : <EditablePlan plan={plan} editPlan={changePlan} />}
        </Route>
        <Route path="/plans">
          <PlansView plans={plans} />
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
