import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ user, setUser }) => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => setShowMenu(!showMenu)

  return (
    <nav className='bg-gray-200 absolute h-16 w-full z-40'>
      <div className='max-w mx-5'>
        <div className='flex justify-between items-center'>
          <Link to='/' className='flex'>
            <div className='flex items-center px-3 py-5 text-gray-800'>
              <svg
                className='w-6 h-6 mr-2 text-blue-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z'
                />
              </svg>
              <span className='font-bold'>CalPlanner</span>
            </div>
          </Link>
          {!user ? (
            <div className='hidden md:flex items-center'>
              <a
                href='http://localhost:3001/auth/google'
                className='px-3 py-3 rounded bg-blue-500 hover:bg-blue-600 text-white transition duration-300'
              >
                <div>Login</div>
              </a>
            </div>
          ) : (
            <div className='hidden md:flex items-center'>
              <a
                href='http://localhost:3001/auth/logout'
                className='px-3 py-3 rounded bg-blue-500 hover:bg-blue-600 text-white transition duration-300'
              >
                <div>Logout</div>
              </a>
            </div>
          )}
          <div
            className={`md:hidden flex justify-center items-center w-10 h-10 rounded ${
              showMenu ? `bg-gray-300` : ''
            }`}
          >
            <button onClick={toggleMenu}>
              <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={showMenu ? 'block bg-gray-200' : 'hidden'}>
        <div className='flex flex-col'>
          <Link to='/' className='p-5 hover:bg-gray-300'>
            Hello
          </Link>
          <Link to='/' className='p-5 hover:bg-gray-300'>
            World
          </Link>
          <Link to='/' className='p-5 hover:bg-gray-300'>
            Test
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
