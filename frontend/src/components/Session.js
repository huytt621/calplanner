import Course from './Course'

const Session = ({ session }) => {
  return (
    <table className="m-5">
      <thead>
        <tr>
          <th>{session.name}</th>
          <th>Units</th>
        </tr>
      </thead>
      <tbody>
        {session.courses.map(c => <Course course={c} />)}
      </tbody>
    </table>
  )
}

export default Session