import Session from './Session'

const Year = ({ year }) => {
  return (
    <div>
      {year.map(session => <Session session={session} />)}
    </div>
  )
}

export default Year