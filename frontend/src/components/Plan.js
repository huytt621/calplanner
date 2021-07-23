import Year from './Year'

const Plan = ({ plan }) => {
  return (
    <div>
      {plan.years.map(year => <Year year={year} />)}
    </div>
  )
}

export default Plan