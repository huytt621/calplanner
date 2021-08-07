import Year from './Year'
import EditableText from './EditableText'
import { useEffect, useState } from 'react'

const Plan = ({ plan, editPlan }) => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setName(plan.name)
    setDescription(plan.description)
  }, [plan])

  const addYear = () => {
    editPlan((newPlan) => {
      const newYear = []
      for (let i = 0; i < plan.numSessionsPerYear; i += 1) {
        newYear.push({ name: `Session ${i + 1}`, courses: [] })
      }
      newPlan.years.push(newYear)
    })
  }

  const saveName = () => {
    editPlan(newPlan => newPlan.name = name)
  }

  const saveDescription = () => {
    editPlan(newPlan => newPlan.description = description)
  }

  return (
    <div className="flex flex-col">
      <div>
        {plan.years.map((year, index) => <Year key={''} year={year} yearIndex={index} plan={plan} editPlan={editPlan} />)}
      </div>
      <button onClick={addYear}>Add New Year</button>
      <EditableText text={name} placeholder="Name of Plan">
        <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} onBlur={saveName} placeholder="Name of Plan"></input>
      </EditableText>
      <EditableText text={description} placeholder="Description">
        <textarea type="text" name="description" value={description} onChange={e => setDescription(e.target.value)} onBlur={saveDescription} placeholder="Description"></textarea>
      </EditableText>
    </div>
  )
}

export default Plan