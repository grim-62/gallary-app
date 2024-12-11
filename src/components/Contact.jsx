import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Contact = () => {

  const navigate = useNavigate()

  return (
    <div className='bg-[#e8eddf]/[.5] relative w-full h-screen flex flex-col items-center justify-center overflow-hidden'>
      <Link to={navigate(-1)}>
        <div className="fixed top-6 left-6 cursor-pointer">
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/152/152351.png" alt="" />
        </div>
      </Link>
    <img className='w-40 object-contain mb-6' src="https://cdn-icons-png.flaticon.com/512/3002/3002662.png" alt="" />
    <h1 className='md:text-3xl leading-snug'>Want to know about me?</h1>
    <div className="flex items-center justify-center mt-6 gap-6 md:gap-8">

        <a href="https://github.com/grim-62">
          <img className='md:w-12 w-8 mb-8 object-cover cursor-pointer hover:invert duration-300' src="https://cdn-icons-png.flaticon.com/512/270/270798.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/prashant-dhurve-126131252">
          <img className='md:w-12 w-8 mb-8 object-cover cursor-pointer hover:invert duration-300' src="https://cdn-icons-png.flaticon.com/512/2504/2504923.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default Contact