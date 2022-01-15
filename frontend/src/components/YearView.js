import React from 'react'
import SessionView from './SessionView'

const YearView = ({ year, yearNum, updatePlan }) => {
  return (
    <div className='flex justify-evenly'>
      {year.map((session) => (
        <SessionView
          key={session.id}
          session={session}
          sessionId={session.id}
          year={yearNum}
          updatePlan={updatePlan}
        />
      ))}
    </div>
  )
}

export default YearView
