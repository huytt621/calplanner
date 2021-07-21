import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom" 
import { useState } from 'react'
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import Home from './components/Home'
import './index.css'

const App = () => {
  const [user, setUser] = useState(null)

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
    </div>
  )
}

export default App;
