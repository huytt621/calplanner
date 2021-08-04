import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom" 
import { useState, useEffect } from 'react'
import planService from './services/plans'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'
import './index.css'


import axios from 'axios'
import Plan from './components/Plan'
const App = () => {
  const [user, setUser] = useState(null)
  const [plan, setPlan] = useState({years: []})

  useEffect(() => {
    axios
      .get('http://localhost:3001/api/plans/6104b8837af9231e09e29b06')
      .then(response => {
        setPlan(response.data)
      })
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPlanappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      planService.setToken(user.token)
    }
  }, [])

  useEffect(() => {
    planService.update("6104b8837af9231e09e29b06", plan)
  }, [plan])

  return (
    <div className="App font-sans flex flex-col">
      <Router>
        <NavBar user={user} />
        <Switch>
          <Route path="/plans">
            <Plan plan={plan} setPlan={setPlan} />
          </Route>
          <Route path="/login">
            <LoginForm setUser={setUser} />
          </Route>
          <Route path="/register">
            <RegisterForm setUser={setUser} />
          </Route>
          <Route path="/">
            <Home user={user} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
