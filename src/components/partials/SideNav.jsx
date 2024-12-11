import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideNav = ({setmediaType}) => {


  const navigate = useNavigate()

  const navigateToHome = () => {
    localStorage.setItem('page',0)
    navigate('/')
  }

  return (
    <>

<div className="left hidden lg:block lg:sticky w-[10%] p-10 h-full z-[9] top-0">

   
    <div className=' w-full py-2 gap-20 rounded-xl flex flex-col items-center justify-center h-full'>
      <div onClick={navigateToHome} className='xl:w-16 w-12 xl:h-16 h-12 cursor-pointer p-3 shadow-inner flex items-center justify-center rounded-xl bg-[#333533]'>
      <img className='w-full object-contain invert' src="https://cdn-icons-png.flaticon.com/128/69/69524.png" alt="" />
      </div>

    <div className="btm bg-[#e8eddf]/[.5] py-4 px-2 rounded-lg">

      <div onClick={e=>setmediaType("photos")} className='xl:w-16 w-12 xl:h-16 h-12 cursor-pointer p-3 mb-4 shadow-inner flex items-center justify-center rounded-xl bg-[#333533]'>
      <img className='w-full object-contain invert' src="https://cdn-icons-png.flaticon.com/128/9261/9261193.png" alt="" />
      </div>
      <div  onClick={e=>setmediaType("videos")} className='xl:w-16 w-12 xl:h-16 h-12 cursor-pointer p-3 shadow-inner flex items-center justify-center rounded-xl bg-[#333533]'>
      <img className='w-full object-contain invert' src="https://cdn-icons-png.flaticon.com/128/5761/5761917.png" alt="" />

      </div>
    </div>

    </div>
    </div>

    </>
  )
}

export default SideNav