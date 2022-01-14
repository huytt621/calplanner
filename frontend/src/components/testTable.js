import React from 'react'
import { useTable } from 'react-table'

function TestTable() {
  const [data, setData] = React.useState(
    () => [
      {
        name: 'CS 61A',
        units: '4',
      },
      {
        name: 'EECS 16A',
        units: '4',
      },
      {
        name: 'GERMAN R5A',
        units: '4',
      },
      {
        name: 'ESPM 50AC',
        units: '4',
      },
      {
        name: 'CS 61B',
        units: '4',
      },
      {
        name: 'EECS 16B',
        units: '4',
      },
      {
        name: 'GERMAN R5B',
        units: '4',
      },
      {
        name: 'PSYCH C126',
        units: '3',
      },
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Column 1',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Column 2',
        accessor: 'units',
      },
    ],
    []
  )

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data })

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default TestTable
