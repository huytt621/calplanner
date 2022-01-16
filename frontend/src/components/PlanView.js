import React from 'react'
import YearView from './YearView'

const PlanView = ({ plan, updatePlan }) => {
  return (
    <div>
      {plan.years.map((year, i) => (
        <YearView key={i} year={year} yearNum={i} updatePlan={updatePlan} />
      ))}
    </div>
  )
}

export default PlanView
