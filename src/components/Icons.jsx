import React, { useState } from 'react'
import {FaVk} from 'react-icons/fa'
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";


const Icons = () => {
  const [links, setLinks] = useState([
    { icon: <FaVk/>,website:"https://vk.com/"},
    { icon: <AiFillFacebook/>,website:"https://web.facebook.com/?locale=ar_AR"},
    { icon: <AiFillInstagram/>,website:"https://www.instagram.com//"},
    { icon: <AiOutlineTwitter/>,website:"https://twitter.com/?lang=ar"},

  ])
  return <>
  <ul className='flex absolute text-white bottom-[8%] gap-10 sm:bottom-[20%] sm:gap-16 md:flex-col md:bottom-[2%] md:left-4 md:gap-3  lg:left-5 lg:gap-5 md:text-mainColor z-20'>
{links.map((link,index) => <li key={index} className=''>
  <a className='text-2xl' href={link.website}>{link.icon}</a>
</li>
  
)}
  </ul>
  </>
}

export default Icons