import { Link } from "react-router-dom"

const NavBar = ({ user }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">CalPlanner</Link>
        </li>
        <li>
          <Link to="/plans">Plans</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <div>{user ? user.username : ''}</div>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar