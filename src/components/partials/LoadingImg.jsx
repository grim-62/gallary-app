import React from 'react'

const LoadingImg = () => {
    return (
        <>
            <div className='bg-[#e8eddf]/[.8] w-full p-10 gap-6 xl:rounded-xl grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2  backdrop-blur-lg'>
                <div className={`animate-pulse img h-96 rounded-xl bg-[#51534e] overflow-hidden`}>
                </div>
                <div className={`animate-pulse img h-96 rounded-xl bg-[#51534e] overflow-hidden`}>
                </div>
                <div className={`animate-pulse img h-96 rounded-xl bg-[#51534e] overflow-hidden`}>
                </div>
                <div className={`animate-pulse img h-96 rounded-xl bg-[#51534e] overflow-hidden`}>
                </div>
                <div className={`animate-pulse img h-96 rounded-xl bg-[#51534e] overflow-hidden`}>
                </div>
            </div>
        </>
    )
}

export default LoadingImg