import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='z-0 h-96 hero text-white flex items-center absolute w-full top-16'>
      <div className='m-10'>
        <h1 className='font-normal text-5xl'>Build Your Future.</h1>
        <h2 className='font-light text-lg my-4'>
          Create a four-year plan here
        </h2>
        <button className='mt-8 bg-white opacity-50 font-bold text-center text-black p-3 px-6 rounded-lg hover:opacity-30 transition ease-in-out duration-200'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
