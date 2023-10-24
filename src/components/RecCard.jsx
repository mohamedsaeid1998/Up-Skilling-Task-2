import { useState } from 'react'
// @ts-ignore
import img1 from '../assets/Recipes 1.jpg'
// @ts-ignore
import img2 from '../assets/Recipes 2.jpg'
// @ts-ignore
import img3 from '../assets/Recipes 3.jpg'
const RecCard = () => {

  const [data, setData] = useState([
    { image: img3, text: "Bread omelette", style: "mt-3",card:'h-[300px]' },
    { image: img2, text: "Breakfast Potatoes", style: "mt-0" , card:'h-[312px]' },
    { image: img1, text: "Home-made Mandazi", style: "mt-3" , card:'h-[300px]'},
  ])
  return <>
    {data.map((ele, index) => <div key={index} className={` rounded-[30px] border ${ele.style} border-orange-200 `}>
      <img src={ele.image} className={`w-full  ${ele.card}  rounded-tl-[30px] rounded-tr-[30px]`} alt="img" />
      <div className='px-6 py-2'>
        <h3 className='text-mainColor text-center lg:text-start text-base font-black '>{ele.text}</h3>
        <p className='text-sm  mt-2 w-full text-center lg:text-start '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
      </div>
    </div>
    )}


  </>
}
export default RecCard