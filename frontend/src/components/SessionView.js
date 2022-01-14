import React, { useState, useMemo } from 'react'
import Table from './Table'

const SessionView = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Course Name',
        accessor: 'name',
      },
      {
        Header: 'Units',
        accessor: 'units',
      },
    ],
    []
  )

  const [data, setData] = useState(() => [
    {
      name: 'CS 61A',
      units: '4',
    },
    {
      name: 'CS 61B',
      units: '4',
    },
  ])

  const [skipPageReset, setSkipPageReset] = useState(false)

  const updateData = (rowIndex, columnId, value) => {
    setSkipPageReset(true)
    setData((old) =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value,
          }
        }
        return row
      })
    )
  }

  React.useEffect(() => {
    setSkipPageReset(false)
  }, [data])

  return (
    <Table
      columns={columns}
      data={data}
      updateData={updateData}
      skipPageReset={skipPageReset}
    />
  )
}

export default SessionView
