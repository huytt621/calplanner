import { useState } from 'react'
import { useHistory } from 'react-router'
import loginService from '../services/login'
import planService from '../services/plans'

const LoginForm = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem(
        'loggedPlanappUser', JSON.stringify(user)
      )
      planService.setToken(user.token)
      setUsername('')
      setPassword('')
      setUser(user)
      history.push('/')
    } catch (exception) {
      console.log(exception);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        Username:
        <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)}/>
        Password:
        <input type="password" value={password} name="Password" onChange={({ target }) => setPassword(target.value)}/>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default LoginForm