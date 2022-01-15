import React from 'react'
import { useResource } from '../hooks/resource'
import YearView from './YearView'

const PlanView = ({ plan, setPlan }) => {
  const planService = useResource('http://localhost:3001/api/plans')
  const updatePlan = (courses, year, session) => {
    const newPlan = { ...plan }
    const newSession = newPlan.years[year].find((s) => s.id === session)
    newSession.courses = courses
    setPlan(newPlan)
    planService.update(plan.id, newPlan)
  }
  return (
    <div>
      {plan.years.map((year, i) => (
        <YearView key={i} year={year} yearNum={i} updatePlan={updatePlan} />
      ))}
    </div>
  )
}

export default PlanView
