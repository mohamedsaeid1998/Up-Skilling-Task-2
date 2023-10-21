import React, { useState } from 'react'
import {FaVk} from 'react-icons/fa'
import { AiFillFacebook } from "react-icons/Ai";
import { AiFillInstagram } from "react-icons/Ai";
import { AiOutlineTwitter } from "react-icons/Ai";
const Icons = () => {
  const [links, setLinks] = useState([
    { icon: <FaVk/>,website:"https://vk.com/"},
    { icon: <AiFillFacebook/>,website:"https://web.facebook.com/?locale=ar_AR"},
    { icon: <AiFillInstagram/>,website:"https://www.instagram.com//"},
    { icon: <AiOutlineTwitter/>,website:"https://twitter.com/?lang=ar"},

  ])
  return <>
  <ul className='flex absolute text-white bottom-[14%] gap-10 sm:bottom-[20%] sm:gap-16 md:bottom-[5%] md:left-10  md:flex-col md:gap-4 md:text-mainColor z-20'>
{links.map((link,index) => <li key={index} className=''>
  <a className='text-2xl' href={link.website}>{link.icon}</a>
</li>
  
)}
  </ul>
  </>
}

export default Icons