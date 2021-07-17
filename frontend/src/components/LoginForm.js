import loginService from '../services/login'

const LoginForm = ({ username, setUsername, password, setPassword }) => {
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      setUsername('')
      setPassword('')
    } catch (exception) {
      console.log(exception);
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <div>
        Username:
        <input type="text" value={username} name="Username" onChange={({ target }) => setUsername(target.value)}/>
      </div>
      <div>
        Password:
        <input type="password" value={password} name="Password" onChange={({ target }) => setPassword(target.value)}/>
      </div>
    </form>
  )
}

export default LoginForm