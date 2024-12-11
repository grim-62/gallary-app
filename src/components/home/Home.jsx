import React, { useState } from 'react'
import HomeRightSection from './HomeRightSection'
import SideNav from '../partials/SideNav'
import { Outlet } from 'react-router-dom'

const Home = () => {

  const [mediaType, setmediaType] = useState("photos")


  return (
    <div className='w-full pb-20 text-[#333533] min-h-screen relative z-[1] bg-[#333533] xl:bg-[#cfdbd5]'>
      <img className='w-full h-full fixed top-0 left-0 object-cover brightness-[85%] contrast-125' src="https://plus.unsplash.com/premium_photo-1706430433638-b9f3183a496e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className="flex w-full h-full relative">
        <SideNav setmediaType={setmediaType} />
        <HomeRightSection mediaType = {mediaType} />

      </div>


    <Outlet/>

    </div >
  )
}

export default Home