import {
  Switch, 
  Route,
  useRouteMatch
} from "react-router-dom" 
import { useState, useEffect } from 'react'
import userService from './services/user'
import planService from './services/plans'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'
import Profile from './components/Profile'
import PlansView from './components/PlansView'
import Plan from './components/Plan'
import './index.css'

const App = () => {
  const [user, setUser] = useState(null)
  const [plans, setPlans] = useState([])
  const [plan, setPlan] = useState({years: []})

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPlanappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      planService.setToken(user.token)
      userService
        .get(user.id)
        .then(user => setUser(user))
    }
  }, [])

  useEffect(() => {
    planService
      .getAll()
      .then(plans => setPlans(plans))
  }, [])

  const editPlan = action => {
    const newPlan = {...plan}
    action(newPlan)
    setPlan(newPlan)
    planService
      .update(newPlan.id, newPlan)
  }

  const match = useRouteMatch('/plans/:id')
  useEffect(() => {
    if (match) {
      planService
        .get(match.params.id)
        .then(plan => setPlan(plan))
    }
  }, [match])

  return (
    <div className="App font-sans flex flex-col">
      <NavBar user={user} />
      <Switch>
        <Route path="/plans/:id">
          <Plan plan={plan} editPlan={editPlan} />
        </Route>
        <Route path="/plans">
          <PlansView plans={plans} />
        </Route>
        <Route path="/login">
          <LoginForm setUser={setUser} />
        </Route>
        <Route path="/register">
          <RegisterForm setUser={setUser} />
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
