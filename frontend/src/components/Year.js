import Session from './Session'

const Year = ({ year }) => {
  const columns = [
    {
      Header: 'Course Name',
      accessor: 'name'
    },
    {
      Header: 'Units',
      accessor: 'units'
    }
  ]
  return (
    <div className="flex flex-row">
      {year.map(session => <Session columns={[{ Header: session.name, columns: columns }]} data={session.courses} />)}
    </div>
  )
}

export default Year