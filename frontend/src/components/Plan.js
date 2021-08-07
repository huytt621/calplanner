import Year from './Year'

const Plan = ({ plan, editPlan }) => {
  const addYear = () => {
    editPlan((newPlan) => {
      const newYear = []
      for (let i = 0; i < plan.numSessionsPerYear; i += 1) {
        newYear.push({ name: `Session ${i + 1}`, courses: [] })
      }
      newPlan.years.push(newYear)
    })
  }

  return (
    <div className="flex flex-col">
      <div>
        {plan.years.map((year, index) => <Year key={''} year={year} yearIndex={index} plan={plan} editPlan={editPlan} />)}
      </div>
      <button onClick={addYear}>Add New Year</button>
    </div>
  )
}

export default Plan