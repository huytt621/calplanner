import PlanCard from './PlanCard'

const PlansView = ({ plans }) => {
  return (
    <div>
      {plans.map(p => <PlanCard key={p.id} plan={p} />)}
    </div>
  )
}

export default PlansView