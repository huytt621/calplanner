import React, { useState, useEffect, useMemo } from 'react'
import Table from './Table'

const SessionView = ({ session, sessionId, year, updatePlan }) => {
  const columns = useMemo(
    () => [
      {
        Header: session.name,
        columns: [
          {
            Header: 'Course Name',
            accessor: 'name',
          },
          {
            Header: 'Units',
            accessor: 'units',
          },
        ],
      },
    ],
    []
  )

  const [data, setData] = useState(() => session.courses)

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

  useEffect(() => {
    setSkipPageReset(false)
    updatePlan(data, year, sessionId)
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
