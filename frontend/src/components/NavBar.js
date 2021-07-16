import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <h1>CalPlanner</h1>
      <ul>
        <li>
          <Link to="/plans">Plans</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

const Button = () => {

}

export default NavBar