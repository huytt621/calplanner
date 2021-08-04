import { useTable } from 'react-table'

const Session = ({ columns, data, year, sessionIndex, setPlan, plan }) => {

  const updateMyData = (rowIndex, columnId, value) => {
    const newPlan = {...plan}
    const newSession = newPlan.years[year][sessionIndex]
    const editedCourse = newSession.courses[rowIndex]
    editedCourse[columnId] = value
    setPlan(newPlan)
  }

  const addCourse = () => {
    const newPlan = {...plan}
    const newSession = newPlan.years[year][sessionIndex]
    const newCourse = {name: '', units: ''}
    newSession.courses.push(newCourse)
    setPlan(newPlan)
  }

  const removeCourse = (rowIndex) => {
    const newPlan = {...plan}
    const newSession = newPlan.years[year][sessionIndex]
    newSession.courses.splice(rowIndex, 1)
    setPlan(newPlan)
  }

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({
    columns,
    data,
    updateMyData
  })

  return (
    <div>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  )
                })}
                <td><button onClick={() => removeCourse(i)}>Delete</button></td>
              </tr>
            )
          })}
          <tr>
            <th colSpan="2">
              <button className="w-full" onClick={addCourse}>+</button>
            </th>
          </tr>
          <tr>
            <td>Total Units</td>
            <td>{data.reduce((totalUnits, course) => totalUnits + Number(course.units), 0)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Session