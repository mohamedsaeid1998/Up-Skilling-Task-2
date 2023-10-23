import React, { useState } from 'react'
import { AiFillStar } from "react-icons/ai";
const TestCard = () => {


  return <>
    <div className='test-card bg-white rounded-[30px] py-4 px-10'>

      <h3 className='text-mainColor text-base font-black '>Kathryn Murphy </h3>
      <p className='text-sm mt-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
      <ul className='flex gap-[6px] mt-5 text-mainColor'>
        <li><i className='text-lg'><AiFillStar /></i></li>
        <li><i className='text-lg'><AiFillStar /></i></li>
        <li><i className='text-lg'><AiFillStar /></i></li>
        <li><i className='text-lg'><AiFillStar /></i></li>
        <li><i className='text-lg'><AiFillStar /></i></li>
      </ul>
    </div>
  </>

}

export default TestCard