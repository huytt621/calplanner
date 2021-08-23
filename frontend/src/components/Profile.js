import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PlansView from '../components/PlansView'
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
      <PlansView plans={plans} />
      <span>
        <Link to="/plans/new">Create New Plan</Link>
      </span>
    </div>
  )
}

export default Profile