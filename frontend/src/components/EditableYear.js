import EditableCell from './EditableCell'
import EditableSession from './EditableSession'

const EditableYear = ({ year, yearIndex, plan, editPlan }) => {
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
    editPlan((newPlan) => {
      newPlan.years.splice(yearIndex, 1)
    })
  }

  return (
    <div className="flex flex-row">
      <div>Year {yearIndex + 1}</div>
      <button onClick={deleteYear}>Delete</button>
      {year.map((session, index) => <EditableSession key={`y${yearIndex}s${index}`} columns={[{ Header: session.name, columns: columns }]} data={session.courses} year={yearIndex} sessionIndex={index} plan={plan} editPlan={editPlan} />)}
    </div>
  )
}

export default EditableYear