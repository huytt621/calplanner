import PlanCard from './PlanCard'
import { useState, useEffect } from 'react'
import planService from '../services/plans'

const Profile = ({ user }) => {
  const [plans, setPlans] = useState([])

  useEffect(() => {
    if (user !== null) {
      user.plans.forEach(planId => {
        planService
          .get(planId)
          .then(plan => setPlans(plans.concat(plan)))
      })
    }
  }, [user])

  return (
    <div>
      <h2>My Plans</h2>
      {plans.map(p => <PlanCard key={user.id + p.name} plan={p} />)}
    </div>
  )
}

export default Profile