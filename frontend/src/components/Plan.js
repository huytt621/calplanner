import Year from './Year'

const Plan = ({ plan, editPlan }) => {
  const addYear = () => {
    editPlan((newPlan) => {
      const newYear = [{name: 'Fall 2021', courses: []}, {name: 'Spring 2022', courses: []}, {name: 'Summer 2022', courses: []}]
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