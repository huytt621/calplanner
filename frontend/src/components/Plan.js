import Year from './Year'

const Plan = ({ plan }) => {
  return (
    <div className="flex flex-col">
      {plan.years.map(year => <Year year={year} />)}
    </div>
  )
}

export default Plan