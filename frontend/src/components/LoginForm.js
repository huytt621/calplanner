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
    <form onSubmit={handleLogin} className="">
      <div className="text-center text-3xl mt-4">
        Log in to CalPlanner
      </div>
      <div className="mt-8 m-auto rounded-md pt-4 flex flex-col bg-berkeley-blue w-4/12" >
        <input className="bg-gray-200 focus:bg-white border-4 p-3 m-2 w-7/12 m-auto" type="text" value={username} placeholder="Enter your username" name="Username" onChange={({ target }) => setUsername(target.value)}/>
        <input className="bg-gray-200 focus:bg-white border-4 p-3 m-2 w-7/12 m-auto mt-4" type="password" value={password} placeholder="Enter your password" name="Password" onChange={({ target }) => setPassword(target.value)}/>
        <button className="bg-green-500 hover:bg-green-600 text-white p-3 m-2 w-7/12 m-auto mt-4" type="submit">Log In</button>
      </div>
    </form>
  )
}

export default LoginForm