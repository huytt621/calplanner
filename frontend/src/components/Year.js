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
  return (
    <div className="flex flex-row">
      {year.map((session, index) => <Session columns={[{ Header: session.name, columns: columns }]} data={session.courses} year={yearIndex} sessionIndex={index} plan={plan} setPlan={setPlan} />)}
    </div>
  )
}

export default Year