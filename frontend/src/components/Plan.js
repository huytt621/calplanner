import Year from './Year'

const Plan = ({ plan, setPlan }) => {
  return (
    <div className="flex flex-col">
      {plan.years.map((year, index) => <Year year={year} yearIndex={index} plan={plan} setPlan={setPlan} />)}
    </div>
  )
}

export default Plan