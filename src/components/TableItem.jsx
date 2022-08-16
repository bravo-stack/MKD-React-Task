import React from 'react'
import img1 from "./../assets/image.svg"
import img2 from "./../assets/icon-image.svg"
import greenArrow from "./../assets/green-arrow.svg"

function TableItem({number, thumbnail, description, image, username, likes}) {
  return (
    <li className='grid grid-cols-[48px_600px_auto_65px] text-base border-[1px] border-[rgba(255,255,255,.12)] rounded-[16px] items-center px-4 h-[96px] min-w-[1216px] font-[100]'>

        {/* Number */}
        <span>{number<10?`0${number}`:`${number}`}</span>

        {/* Title */}
        <span className='flex gap-4 items-center'>
            <img src={thumbnail} alt="" className='w-[118px] h-[64px] rounded-[8px] border-0 bg-green-400' width="118" />
            <span className='text-[20px] text-white pr-8'>
                {description}
            </span>
        </span>

        {/* Author */}
        <span className='pl-2 flex gap-2'>
            <img src={img1} alt="profile icon" width="24" height="24"/>
            <p className='text-base'>{username}</p>
        </span>

        {/* Most Liked */}
        <span className='flex gap-2 '>
            <p>{likes}</p>
            <img src={greenArrow} alt="" />
        </span>
        
    </li>
  )
}

export default TableItem