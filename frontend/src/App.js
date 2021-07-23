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

const App = () => {
  const [user, setUser] = useState(null)
  const [plan, setPlan] = useState(null)

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedPlanappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      planService.setToken(user.token)
    }
  }, [])

  return (
    <div className="App ">
      <Router>
        <NavBar user={user} />
        <Switch>
          <Route path="/login">
            <LoginForm setUser={setUser} />
          </Route>
          <Route path="/register">
            <RegisterForm setUser={setUser} />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
