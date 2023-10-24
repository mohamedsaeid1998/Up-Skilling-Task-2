import { useState } from 'react'
// @ts-ignore
import img1 from '../assets/1.png'
// @ts-ignore
import img2 from '../assets/2.png'
// @ts-ignore
import img3 from '../assets/3.png'
// @ts-ignore
import img4 from '../assets/4.png'
const Pictures = () => {

  const [pictures, setPictures] = useState([
    { photo: img4 },
    { photo: img3 },
    { photo: img2 },
    { photo: img1 },
  ])
  return <>
    <div className=' flex flex-col items-center md:grid grid-cols-2 lg:flex lg:w-full lg:flex-row justify-between gap-3 sm:gap-5 z-30 relative px-9 pt-6   '>
      {pictures.map((ele,index) =><img key={index} src={ele.photo} className='w-[250px] h-[228px] sm:h-[245px]  sm:w-[300px] xl:w-full xl:h-full object-cover rounded-[10px]' alt="img" />)}
    </div>
  </>
}

export default Pictures