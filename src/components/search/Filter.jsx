import React, { useState } from 'react'

const Filter = ({ query,size,setsize,orientation,setorientation,color,setcolor }) => {

    return (
        <div className='relative z-[99] bg-[#e8eddf]/[.5] xl:mb-10 w-full lg:px-10 pt-8 lg:pt-6 px-6 py-4 gap-6 xl:rounded-xl backdrop-blur-lg'>
            <div className="top flex justify-between items-center">
                <h1 className='font-bold text-4xl'>"<span className=' capitalize gil-bold'>{query}</span>" related images.</h1>
                <div className="self-end mt-4">
                    Filters
                </div>
            </div>
            <div className="filters flex md:flex-row flex-col w-full gap-3 xl:gap-8 my-4">
                <div className="w-full xl:w-1/3 relative bg-[#e8eddf] group border-[#333533]/[.6] cursor-pointer rounded flex gap-2 px-4 py-2">
                    <span className='font-medium capitalize'>{orientation?orientation:'All Orientations'}</span>
                    <div className="opts w-full absolute h-0 overflow-hidden group-hover:h-48  transition-all duration-300 top-[120%]  border-[#afb0ac] rounded left-0 z-[99] bg-[#e8eddf]">
                        <h2 onClick={e=>setorientation(null)} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>All Orientations</h2>
                        <h2 onClick={e=>setorientation('portrait')} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>Portrait</h2>
                        <h2 onClick={e=>setorientation('landscape')} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>Landscape</h2>
                        <h2 onClick={e=>setorientation('square')} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>Square</h2>
                    </div>
                </div>
                <div className="w-full xl:w-1/3 relative bg-[#e8eddf] group border-[#333533]/[.6] cursor-pointer rounded flex gap-2 px-4 py-2">
                    <span className='font-medium capitalize'>{size?size:'All Sizes'}</span>
                    <div className="opts w-full absolute h-0 overflow-hidden group-hover:h-48  transition-all duration-300 top-[120%]  border-[#afb0ac] rounded left-0 z-[99] bg-[#e8eddf]">
                        <h2 onClick={e=>setsize(null)} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>All Sizes</h2>
                        <h2 onClick={e=>setsize('medium')} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>Medium</h2>
                        <h2 onClick={e=>setsize('large')} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>Large</h2>
                        <h2 onClick={e=>setsize('small')} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>Small</h2>
                    </div>
                </div>
                <div className="w-full xl:w-1/3 relative bg-[#e8eddf] group border-[#333533]/[.6] cursor-pointer rounded flex gap-2 px-4 py-2">
                    <span className='font-medium capitalize'>{color?color:'All Colors'}</span>
                    <div className="opts w-full absolute h-0 overflow-hidden group-hover:h-48  transition-all duration-300 top-[120%]  border-[#afb0ac] rounded left-0 z-[99] bg-[#e8eddf]">
                        <h2 onClick={e=>setcolor(null)} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>All colors</h2>
                        <h2 onClick={e=>setcolor('red')} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>red</h2>
                        <h2 onClick={e=>setcolor('green')} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>green</h2>
                        <h2 onClick={e=>setcolor('white')} className='w-full px-4 py-3 hover:bg-[#d8dcd0] border-b border-[#afb0ac]'>white</h2>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Filter