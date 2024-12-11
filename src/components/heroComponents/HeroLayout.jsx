import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const HeroLayout = () => {
  return (
    <div id='hero' className='relative backdrop-blur-md lg:backdrop-blur-0 lg:mb-10 w-full lg:h-52 flex lg:flex-row flex-col-reverse lg:gap-8'>
         
         <HeroLeft/>
          <HeroRight/>
    </div>
  )
}

export default HeroLayout