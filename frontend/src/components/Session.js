import Course from './Course'

const Session = ({ session }) => {
  return (
    <table>
      <thead>
        <tr>
          <th colspan="2">{session.name}</th>
        </tr>
      </thead>
      <tbody>
        {session.courses.map(c => <Course course={c} />)}
      </tbody>
    </table>
  )
}

export default Session