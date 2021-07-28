const Course = ({ course }) => (
  <tr>
    <td className="p-2">{course.name}</td>
    <td className="p-2">{course.units}</td>
  </tr>
)

export default Course
