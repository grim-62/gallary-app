import React from 'react'

const Card = ({ img, orientation }) => {



  const downloadImage = (url, filename) => {
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = filename;
        a.click();
        URL.revokeObjectURL(a.href);
      })
      .catch(err => console.error('Error while downloading the image', err));
  };


  return (
    <div className={`img h-fit group shrink-0 relative ${orientation === 'landscape' ? 'xl:h-[14rem] lg:h-[12rem] ' : 'md:h-96'} rounded-xl bg-[#b5b6ac] overflow-hidden`}>
      <div className="overlay flex items-center justify-end flex-col w-full h-full absolute group-hover:opacity-100 opacity-100 duration-300 pointer-events-none bg-gradient-to-b from-black/[.7] via-transparent to-black/[.7]">
        <div className="top w-full flex justify-between px-4 py-4 items-end">
          <div className="flex items-center gap-[1px]">
            <div className="w-8 h-8 shrink-0 rounded-full bg-yellow-900"></div>
            <h1 className='p-2 font-bold text-[#e8eddf]'>{img.photographer.slice(0, 10)}</h1>
          </div>

          <div className="bg-emerald-500 relative z-0 h-max group pointer-events-auto rounded-lg px-4 xl:px-8 py-2">
            <span  onClick={e => downloadImage(img.src.large2x, `img${img.id}_from_astha_gallery_app`)} className='font-medium capitalize'>Download</span>
            <div className="opts w-full absolute h-0 overflow-hidden group-hover:h-[12.5rem] transition-all duration-300 top-[0%] -translate-y-[101%]  border-[#afb0ac] rounded left-0 z-[999] bg-[#e8eddf]">
              <h2 onClick={e => downloadImage(img.src.large2x, `img${img.id}_360p_from_astha_gallery_app`)} className='w-full pointer-events-auto px-4 py-2 hover:bg-[#c8cebf] text-center border-b border-[#afb0ac]'>360p</h2>
              <h2 onClick={e => downloadImage(img.src.original, `img${img.id}_720p_from_astha_gallery_app`)} className='w-full pointer-events-auto px-4 py-2 hover:bg-[#c8cebf] text-center border-b border-[#afb0ac]'>720p</h2>
              <h2 onClick={e => downloadImage(img.src.medium, `img${img.id}_240p_from_astha_gallery_app`)} className='w-full pointer-events-auto px-4 py-2 hover:bg-[#c8cebf] text-center border-b border-[#afb0ac]'>240p</h2>
              <h2 onClick={e => downloadImage(img.src.small, `img${img.id}_144p_from_astha_gallery_app`)} className='w-full pointer-events-auto px-4 py-2 hover:bg-[#c8cebf] text-center border-b border-[#afb0ac]'>144p</h2>
              <h2 onClick={e => downloadImage(img.src.tiny, `img${img.id}_200x280_from_astha_gallery_app`)} className='w-full pointer-events-auto px-4 py-2 hover:bg-[#c8cebf] text-center border-b border-[#afb0ac]'>200x280</h2>
            </div>
          </div>


        </div>
      </div>
      <img style={{ backgroundColor: img.avg_color }} className={`w-full sm:h-full pointer-events-none object-contain md:object-cover xl:object-cover bg-[${img.avg_color}]`} src={img.src.large2x} alt="" />
    </div>
  )
}

export default Card