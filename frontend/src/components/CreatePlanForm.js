import { useSelector } from "react-redux"
import planService from '../services/plans'

const CreatePlanForm = () => {

  const user = useSelector(state => state.user)

  const createPlan = e => {
    e.preventDefault()
    const plan = { name: e.target.name.value, description: e.target.description.value, user: user.id, numSessionsPerYear: e.target.sessions.value, years: []}
    for (let i = 0; i < e.target.years.value; i += 1) {
      const year = []
      for (let j = 0; j < plan.numSessionsPerYear; j += 1) {
        year.push({ name: `Session ${j + 1}`, courses: []})
      }
      plan.years.push(year)
    }
    planService.create(plan)
  }

  return (
    <form onSubmit={createPlan}>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name"></input>
      <label htmlFor="description">Description:</label>
      <input type="text" name="description"></input>
      <label htmlFor="years">Number of Years:</label>
      <input type="number" name="years" min="1"></input>
      <label htmlFor="sessions">Number of Sessions (e.g. 3 for Fall, Spring, and Summer): </label>
      <input type="number" name="sessions" min="1"></input>
      <button type="submit">Submit</button>
    </form>
  )
}

export default CreatePlanForm