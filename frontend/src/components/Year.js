import EditableCell from './EditableCell'
import Session from './Session'

const Year = ({ year, yearIndex, plan, setPlan }) => {
  const columns = [
    {
      Header: 'Course Name',
      accessor: 'name',
      Cell: EditableCell
    },
    {
      Header: 'Units',
      accessor: 'units',
      Cell: EditableCell
    }
  ]

  const deleteYear = () => {
    const newPlan = {...plan}
    newPlan.years.splice(yearIndex, 1)
    setPlan(newPlan)
  }

  return (
    <div className="flex flex-row">
      <button onClick={deleteYear}>Delete</button>
      {year.map((session, index) => <Session key={session.name} columns={[{ Header: session.name, columns: columns }]} data={session.courses} year={yearIndex} sessionIndex={index} plan={plan} setPlan={setPlan} />)}
    </div>
  )
}

export default Year