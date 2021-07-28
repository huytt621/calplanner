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
import Profile from './components/Profile'
import './index.css'


import axios from 'axios'
import Plan from './components/Plan'
const App = () => {
  const [user, setUser] = useState(null)
  const [plan, setPlan] = useState(null)

  useEffect(() => {
    axios
      .get('http://localhost:3001/plans')
      .then(response => {
        setPlan(response.data[0])
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

  return (
    <div className="App font-sans flex flex-col">
      <Router>
        <NavBar user={user} />
        <Switch>
          <Route path="/plans">
            <Plan plan={plan} />
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
