const PlanCard = ({ plan }) => {
  return (
    <div>
      <h3>{plan.name}</h3>
      <p>{plan.description}</p>
    </div>
  )
}

export default PlanCard