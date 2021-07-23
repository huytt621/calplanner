import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom" 
import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'
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

  return (
    <div className="App ">
      <Router>
        <NavBar />
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
      { plan ?<Plan plan={plan} /> : <div></div> }
    </div>
  )
}

export default App;
