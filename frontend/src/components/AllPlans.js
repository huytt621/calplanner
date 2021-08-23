import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { initializePlans } from "../reducers/planReducer"
import PlansView from "./PlansView"

const AllPlans = () => {

  const dispatch = useDispatch()
  const plans = useSelector(state => state.plans)

  useEffect(() => {
    dispatch(initializePlans())
  }, [dispatch])

  return (
    <PlansView plans={plans} />
  )
}

export default AllPlans