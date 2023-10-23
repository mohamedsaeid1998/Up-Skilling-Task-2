

import './How-We-Work.module.scss'
// @ts-ignore
import paper from '../../assets/landing.png'

import { Button, Pictures } from '@/components'



const HowWeWork = () => {

  return <>
    <section className='How-We-Work'>
      <div className='opacity2'></div>

      <main className=''>

        <div className='flex flex-col lg:flex-row justify-between relative pl-9 pr-6 pt-1 z-10 text-right'>
          <p className=' mt-28 text-start leading-relaxed lg:text-mainColor xl:w-[277px] font-semibold text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
          <h2 className="uppercase text-white text-end ml-auto text-6xl font-extrabold xl:text-[125px] xl:leading-[96%]">how we<br />work</h2>
        </div>

        <Pictures />

        <Button type={'button'} text={'contact us'} className={` block m-auto mt-3 text-center xl:mb-0 relative z-30`} />


      </main>


      {/* <main className="flex flex-col  md:grid grid-row grid-cols-12 relative ">

        <div className='  order-2 md:order-none relative md:static right-land flex flex-col col-span-4  '>
          <img src={paper} className='paper opacity-40 object-fill  md:h-screen ' alt="right-background" />
          <p className=' text-center leading-relaxed absolute top-[205px] xl:w-[277px] xl:top-[95px] xl:left-10 text-mainColor font-semibold text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
        </div>

        <div className='  left-land col-span-8 h-screen bg-mainColor pt-10 text-white text-right'>
          <h2 className="uppercase text-center text-6xl md:text-right font-extrabold md:inline-block xl:h[276px] xl:text-[120px] xl:leading-[96%]">how we<br />work</h2>
          <Pictures />
          <Button text={'contact us'} className={`absolute bottom-4 left-[17%] xl:left-[43%] ml:bottom-0 xl:mb-5`} />

        </div>


      </main> */}
    </section>
  </>
}

export default HowWeWork