import React from 'react'
import {twMerge as tw} from 'tailwind-merge'

const Button = ({text,className,type,linkstyle}) => {

  return <>

<a className={tw(linkstyle)} href="#contact"><button type={type} className={tw(`uppercase text-white bg-buttonColor font-black rounded-[30px] w-[250px] h-[60px] lg:w-[194px] xl:mb-20`,className)}>{text}</button></a>
    

  </>
}

export default Button