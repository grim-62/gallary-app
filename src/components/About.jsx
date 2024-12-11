import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const About = () => {

  const navigate = useNavigate()

  return (
    <div className='bg-[#e8eddf]/[.5] relative w-full h-screen flex flex-col items-center justify-center overflow-hidden'>
      <Link to={navigate(-1)}>
        <div className="fixed top-6 left-6 cursor-pointer">
          <img className='w-8' src="https://cdn-icons-png.flaticon.com/512/152/152351.png" alt="" />
        </div>
      </Link>
      <img className='w-56 mb-8 object-cover' src="https://cdn-icons-png.flaticon.com/512/14032/14032652.png" alt="" />
      <p className='font-black lg:mt-4 lg:text-4xl'>Hello amigos! Prashant this side.</p>
      <p className='font-black lg:mt-4 lg:text-4xl'>Thanks for visiting.❤️</p>
      <a href="https://github.com/WebWithAstha/gallery-app-react">
        <div className="flex items-center justify-center mt-10 group cursor-pointer gap-1">
          <h1 className='font-semibold tracking-[4px] text-xs md:text-md'>Git repository 👉🏼 </h1>
          <img className='md:w-12 w-6 object-cover group-hover:invert duration-300' src="https://cdn-icons-png.flaticon.com/512/9168/9168210.png" alt="" />
        </div>
      </a>



    </div>
  )
}

export default About