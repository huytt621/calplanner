import { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch, Route
} from "react-router-dom" 
import NavBar from './components/NavBar'
import LoginForm from './components/LoginForm'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path="/login">
            <LoginForm username={username} setUsername={setUsername} password={password} setPassword={setPassword} />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App;
