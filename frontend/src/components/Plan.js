import Year from './Year'

const Plan = ({ plan, setPlan }) => {
  const addYear = () => {
    const newPlan = {...plan}
    const newYear = [{name: 'Fall 2021', courses: [{name: '', units: ''}]}, {name: 'Spring 2022', courses: [{name: '', units: ''}]}, {name: 'Summer 2022', courses: [{name: '', units: ''}]}]
    newPlan.years.push(newYear)
    console.log(newPlan);
    setPlan(newPlan)
  }

  return (
    <div className="flex flex-col">
      <div>
        {plan.years.map((year, index) => <Year key={''} year={year} yearIndex={index} plan={plan} setPlan={setPlan} />)}
      </div>
      <button onClick={addYear}>Add New Year</button>
    </div>
  )
}

export default Plan