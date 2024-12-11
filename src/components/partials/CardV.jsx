import React from 'react'
import LoadingImg from './LoadingImg'

const CardV = ({ img }) => {

// console.log(img)

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
    img.user ?
    <div className={`img h-fit group shrink-0 relative md:h-96 rounded-xl bg-[#b5b6ac] overflow-hidden`}>
      <div className="overlay flex items-center justify-end flex-col w-full h-full absolute group-hover:opacity-100 opacity-100 duration-300 pointer-events-none bg-gradient-to-b from-black/[.7] via-transparent to-black/[.7]">
        <div className="top w-full flex justify-between px-4 py-4 items-end">
          <div className="flex items-center gap-[1px]">
            <div className="w-8 h-8 shrink-0 rounded-full bg-yellow-900"></div>
            <h1 className='p-2 font-bold text-[#e8eddf]'>{img.user.name}</h1>
          </div>

          <div className="bg-emerald-500 relative z-0 h-max group pointer-events-auto rounded-lg px-4 xl:px-8 py-2">
            <span  onClick={e => downloadImage(img.video_files[0].link, `img${img.id}_from_astha_gallery_app`)} className='font-medium capitalize'>Download</span>
            <div className="opts w-full absolute h-0 overflow-hidden group-hover:h-[10rem] transition-all duration-300 top-[0%] -translate-y-[101%]  border-[#afb0ac] rounded left-0 z-[999] bg-[#e8eddf]">
              <h2 onClick={e => downloadImage(img.video_files[0].link, `img${img.id}_360p_from_astha_gallery_app`)} className='w-full pointer-events-auto px-4 py-2 hover:bg-[#c8cebf] text-center border-b border-[#afb0ac]'>360p</h2>
              <h2 onClick={e => downloadImage(img.video_files[1].link, `img${img.id}_720p_from_astha_gallery_app`)} className='w-full pointer-events-auto px-4 py-2 hover:bg-[#c8cebf] text-center border-b border-[#afb0ac]'>720p</h2>
              <h2 onClick={e => downloadImage(img.video_files[2].link, `img${img.id}_240p_from_astha_gallery_app`)} className='w-full pointer-events-auto px-4 py-2 hover:bg-[#c8cebf] text-center border-b border-[#afb0ac]'>240p</h2>
              <h2 onClick={e => downloadImage(img.video_files[3].link, `img${img.id}_144p_from_astha_gallery_app`)} className='w-full pointer-events-auto px-4 py-2 hover:bg-[#c8cebf] text-center border-b border-[#afb0ac]'>144p</h2>
            </div>
          </div>


        </div>
      </div>
      <video style={{ backgroundColor: img.avg_color }} className={`w-full sm:h-full pointer-events-none object-contain md:object-cover xl:object-cover bg-[${img.avg_color}]`} src={img.video_files[0].link} alt="" />
    </div>
  :<div className={`animate-pulse img h-96 rounded-xl bg-[#51534e] overflow-hidden`}>
                </div>
  )
}

export default CardV