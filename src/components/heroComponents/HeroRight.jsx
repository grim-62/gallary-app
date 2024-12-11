import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HeroRight = () => {

  const tags = ['species','nature','planet','animals','love','food','species','trending','hey','water']

  const navigate = useNavigate()

  const navigateToSearch = (tag) => {
    localStorage.setItem('page',0)
    navigate(`/search/${tag}`)
  }



  return (
    <div id='hero-rgt' className=" flex-1 h-full overflow-y-auto scrollbar-hid relative lg:bg-[#bdbfb2]/[.97] pb-6 lg:pb-6 lg:rounded-lg px-6 lg:px-6">
      <div className="head sticky top-0 lg:bg-[#bdbfb2]/[.97] z-[9] py-2 pt-6 lg:pt-6 ">
              <h1 className='text-4xl text-[#bdbfb2] lg:text-[#333533] mb-4 gil-bold lg:block hidden'>Quick Searches</h1>
              <h1 className='text-4xl text-[#bdbfb2] lg:text-[#333533] mb-4 font-bold lg:hidden text-shadow'>Quick Searches</h1>
      </div>

    <div className="tags flex flex-wrap gap-4 h-max">
      {tags.map((tag, index) => (
        <h1 key={index} onClick={(e)=>(navigateToSearch(tag))} className='bg-[#e8eddf]/[.8] h-max p-2 px-6 hover:bg-[#333533] hover:text-[#e8eddf] duration-300 rounded-lg cursor-pointer font-medium backdrop-blur-lg'>{tag}</h1>
      ))}
      </div>
      </div>
  )
}

export default HeroRight