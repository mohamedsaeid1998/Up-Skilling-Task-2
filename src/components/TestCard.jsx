import  { useState } from 'react'
import { AiFillStar } from "react-icons/ai";
const TestCard = () => {

const [card, setCard] = useState([
  {style:""},
  {style:""},
  {style:""},
  {style:""},
])
  return <>
  {card.map((ele,index) => <div key={index} className={`test-card bg-white rounded-[30px] py-2 sm:py-4 px-4 xl:py-6 xl:px-6 ${ele.style}`}>
<h3 className='text-mainColor text-base text-center md:text-start font-black '>Kathryn Murphy </h3>
<p className=' text-[11px] sm:text-sm text-center md:text-start mt-1 sm:mt-2 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
<ul className='flex gap-[6px] mt-2 sm:mt-5 justify-center md:justify-start text-mainColor'>
  <li><i className='text-lg'><AiFillStar /></i></li>
  <li><i className='text-lg'><AiFillStar /></i></li>
  <li><i className='text-lg'><AiFillStar /></i></li>
  <li><i className='text-lg'><AiFillStar /></i></li>
  <li><i className='text-lg'><AiFillStar /></i></li>
</ul>
</div>
    
  )}
  </>

}

export default TestCard