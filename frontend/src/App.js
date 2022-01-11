import React, { useState, useEffect } from 'react'
import authService from './services/auth'
import Navbar from './components/Navbar'

const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    authService.getUser().then((response) => {
      if (response.authenticated) {
        setUser(response.user)
      } else {
        setUser(null)
      }
    })
  }, [user])

  return (
    <>
      <Navbar user={user} setUser={setUser} />
    </>
  )
}

export default App
