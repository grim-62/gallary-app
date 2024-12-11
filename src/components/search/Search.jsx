import React, { useEffect, useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import SideNav from '../partials/SideNav'
import TopNav from '../partials/TopNav'
import Axios from '../../utils/Axios'
import LoadingImg from '../partials/LoadingImg'
import Filter from './Filter'
import GridBox from '../partials/GridBox'

const Search = () => {
    const { query } = useParams()
    const [images, setimages] = useState([])
    const [page, setpage] = useState(JSON.parse(localStorage.getItem('page'))||1)
    const [unseenPages, setunseenPages] = useState(null)
    const [orientation, setorientation] = useState(null)
    const [size, setsize] = useState(null)
    const [color, setcolor] = useState(null)   


    const getSearchedImages = async () => {
        const { data } = await Axios.get(`/search?query=${query}&page=${page}&per_page=20&orientation=${orientation ? orientation : ''}&color=${color ? color : ''}`)
        if (data.total_results > 0) {
            setimages(data.photos)
        } else {
            setimages(null)
        }
        setunseenPages(Math.ceil(data.total_results / 20) - page)
    }
    useEffect(() => {
        getSearchedImages()
        
    localStorage.setItem('page',JSON.stringify(page))
    setpage(JSON.parse(localStorage.getItem('page')))
    }, [query, page, size, orientation,color])

    return (
        <div className='w-full pb-20 text-[#333533] min-h-screen relative z-[1] bg-[#cfdbd5]'>
            <img className='w-full h-full fixed top-0 left-0 object-cover brightness-[85%] contrast-125' src="https://plus.unsplash.com/premium_photo-1706430433638-b9f3183a496e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <div className="flex w-full h-full relative">
                <SideNav />
                <div className="right flex-1 lg:pr-10">
                    <TopNav />

                    {images?<>{images.length > 0 ?
                        <>

                        <Filter query={query} orientation={orientation} setorientation={setorientation} setsize={setsize} size={size} color={color} setcolor={setcolor}/>
                        <GridBox media={images} mediaType={"photos"} page={page} unseenPages={unseenPages} setpage={setpage} orientation={orientation} />
                        </>




                        : <LoadingImg />
                    }</>:<div className=' bg-[#e8eddf]/[.5] w-full h-full p-10 flex items-center justify-center rounded-xl backdrop-blur-lg'>
        <h1 className='font-bold text-4xl text-center my-auto mx-auto'>No images found for "{query}"</h1>
                    </div>
                    }
                </div>







            </div>

            <Outlet/>
        </div >
    )
}

export default Search