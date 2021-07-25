import { Link } from "react-router-dom"

const NavBar = ({ user }) => {
  return (
    <nav className="bg-berkeley-blue text-white">
      <ul className="flex flex-row justify-between">
        <li>
          <Link to="/" className="text-3xl p-2 ml-4">CalPlanner</Link>
        </li>
        <div className="flex flex-row">
          <li className="p-2">
            <Link to="/plans">Plans</Link>
          </li>
          <li className="p-2">
            <Link to="/login">Login</Link>
          </li>
          <li className="p-2">
            <Link to="/register">Register</Link>
          </li>
          <li className="p-2 mr-4">
            <div>{user ? user.username : ''}</div>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default NavBar