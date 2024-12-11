import React, { useEffect, useState } from 'react'
import TopNav from '../partials/TopNav'
import HeroLayout from '../heroComponents/HeroLayout'
import GridBox from '../partials/GridBox'
import Axios from '../../utils/Axios'


const HomeRightSection = ({mediaType}) => {


  // console.log(mediaType)

  const [media, setmedia] = useState([])
  const [page, setpage] = useState(JSON.parse(localStorage.getItem('page'))||1)

  const getImg = async () => {
    const { data } = await Axios.get(`/curated?page=${page}&per_page=20`)
    setmedia(data.photos)
  }
  const getVideo = async () => {
    const { data } = await Axios.get(`/videos/popular?page=${page}&per_page=20`)
    setmedia(data.videos)
    console.log("video data ",data)
  }



  useEffect(() => {
    // console.log(mediaType)
    if(mediaType==='photos'){
      getImg()
    }else{
      getVideo()
    }
    localStorage.setItem('page',JSON.stringify(page))
    setpage(JSON.parse(localStorage.getItem('page')))
  }, [page,mediaType])
  
 

  return (
    <div className="rgt relative w-full xl:w-[90%] lg:pr-10 h-full">   
    <TopNav/>
    <HeroLayout/>

    <GridBox media={media} mediaType={mediaType} page ={page} setpage = {setpage}/>    
    </div>
  )
}

export default HomeRightSection