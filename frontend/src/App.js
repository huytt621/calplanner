import React, { useState, useEffect } from 'react'
import { useResource } from './hooks/resource'
import authService from './services/auth'
import Navbar from './components/Navbar'
import PlanView from './components/PlanView'
import Hero from './components/Hero'

const App = () => {
  const [user, setUser] = useState(null)
  const [plan, setPlan] = useState(null)
  const planService = useResource('http://localhost:3001/api/plans')

  const updatePlan = (courses, year, session) => {
    const newPlan = { ...plan }
    const newSession = newPlan.years[year].find((s) => s.id === session)
    newSession.courses = courses
    setPlan(newPlan)
    planService.update(plan.id, newPlan)
  }

  useEffect(() => {
    authService.getUser().then((returnedUser) => setUser(returnedUser))
  }, [])

  useEffect(() => {
    planService.get('61dbcee8be6273e0da98c796').then((returnedPlan) => {
      setPlan(returnedPlan)
    })
  }, [])

  return (
    <div className='relative'>
      <Navbar user={user} setUser={setUser} />
      <Hero />
      {/* {plan !== null ? (
        <PlanView plan={plan} updatePlan={updatePlan} />
      ) : (
        <div></div>
      )} */}
    </div>
  )
}

export default App
