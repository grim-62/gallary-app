import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBox from './SearchBox'




const TopNav = () => {

  const menuRef = useRef()

  const navigate = useNavigate()

  const navigateToHome = () => {
    localStorage.setItem('page', 0)
    navigate('/')
  }

  return (
    <div className='relative lg:py-10 w-full z-[99]'>
      <div className=' bg-[#e8eddf]/[.6] w-full p-4 gap-6 lg:rounded-xl flex items-center justify-between backdrop-blur-lg'>
        <div onClick={navigateToHome} className="logo cursor-pointer w-1/3 flex items-center gap-1 font-black justify-start">
          <h1 className='leading-none uppercase gil-bold italic'>Media Finder</h1>
        </div>
        <div className="center px-2 w-full sticky top-0 lg:relative lg:w-1/3 h-full flex bg-[#e8eddf] rounded-full py-1">
          <SearchBox />
        </div>
        <div className="rgt hidden w-1/3 h-full lg:flex justify-end gap-4">
          <Link to="/about">
            <h1 className='cursor-pointer font-semibold px-4 py-1 hover:bg-[#333533] hover:text-[#e8eddf] duration-300 gil-bold rounded-lg'>About</h1>
          </Link>
          <Link to="/contact">
            <h1 className='cursor-pointer font-semibold px-4 py-1 hover:bg-[#333533] hover:text-[#e8eddf] duration-300 gil-bold rounded-lg'>Contact</h1>
          </Link>
        </div>
        <img onClick={(e) => menuRef.current.style.right = "0%"} className='w-6 lg:hidden block' src="https://cdn-icons-png.flaticon.com/512/9458/9458259.png" alt="" />
        <div ref={menuRef} className='lg:hidden block fixed top-0 transition-all shadow-lg duration-300 z-[9] right-full py-5 w-[70vw] h-screen bg-[#e8eddf]'>
          <div className="w-full text-right px-12 pr-4 mb-10 flex gap-5 justify-between items-center">
            <hr className='h-2 w-full bg-black rounded-full' />
            <img onClick={(e) => menuRef.current.style.right = "-100%"} className='w-8' src="https://cdn-icons-png.flaticon.com/512/15058/15058877.png" alt="" />
          </div>
          <Link to="/">
            <h1 className='mb-2 px-12 text-2xl hover:bg-black hover:text-white py-2 duration-150'>Home</h1>
          </Link>
          <Link to="/about">
            <h1 className='mb-2 px-12 text-2xl hover:bg-black hover:text-white py-2 duration-150'>About</h1>
          </Link>
          <Link to="/contact">
            <h1 className='mb-2 px-12 text-2xl hover:bg-black hover:text-white py-2 duration-150'>Contact</h1>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default TopNav