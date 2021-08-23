import EditableYear from './EditableYear'
import { useSelector, useDispatch } from 'react-redux'
import { editPlan } from '../reducers/planReducer'
import { setCurrentPlan } from '../reducers/currentPlanReducer'

const EditablePlan = () => {

  const dispatch = useDispatch()

  const plan = useSelector(state => state.currentPlan)

  const changePlan = async action => {
    const newPlan = {...plan}
    action(newPlan)
    dispatch(editPlan(plan.id, newPlan))
    dispatch(setCurrentPlan(newPlan.id))
  }

  const addYear = () => {
    changePlan(newPlan => {
      const newYear = []
      for (let i = 0; i < plan.numSessionsPerYear; i += 1) {
        console.log('test');
        newYear.push({ name: `Session ${i + 1}`, courses: [] })
      }
      newPlan.years.push(newYear)
    })
  }

  return (
    <div className="flex flex-col">
      <div>
        {plan.years.map((year, index) => <EditableYear key={`${index}`} year={year} yearIndex={index} plan={plan} editPlan={changePlan} />)}
      </div>
      <button onClick={addYear}>Add New Year</button>
      <div>{plan.name}</div>
    </div>
  )
}

export default EditablePlan