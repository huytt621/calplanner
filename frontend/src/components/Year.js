import Session from './Session'

const Year = ({ year }) => {
  return (
    <div className="bg-red-500 flex flex-row">
      {year.map(session => <Session session={session} />)}
    </div>
  )
}

export default Year