import { Link } from 'react-router-dom'

const PlanCard = ({ plan }) => {
  return (
    <Link to={`/plans/${plan.id}`}>
      <h3>{plan.name}</h3>
      <p>{plan.description}</p>
    </Link>
  )
}

export default PlanCard