import userService from '../services/user'
import { useState } from 'react'

const RegisterForm = ({ setUser }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleRegister = async (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      // display error
      console.log('error');
      return
    }
    try {
      const user = await userService.create({
        username, password
      })
      setUsername('')
      setPassword('')
      setConfirmPassword('')
      setUser(user)
      // redirect to home screen
    } catch (exception) {
      console.log(exception);
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <div>
        Username:
        <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)}/>
        Password:
        <input type="password" value={password} name="Password" onChange={({ target }) => setPassword(target.value)}/>
        Confirm Password:
        <input type="password" value={confirmPassword} name="ConfirmPassword" onChange={({ target }) => setConfirmPassword(target.value)}/>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default RegisterForm