import './How-We-Work.module.scss'
import { Button, Pictures } from '@/components'

const HowWeWork = () => {

  return <>
    <section className='How-We-Work relative '>
      <div className='opacity2 h-full'></div>

      <main className='pt-3 flex flex-col items-center justify-center w-full'>

        <div className='flex flex-col lg:flex-row  w-full justify-between relative pl-9 pr-6 pt-1 z-10  text-right'>
          <p className=' lg:mt-28  relative order-2 lg:order-1 leading-relaxed lg:text-mainColor text-center lg:text-start lg:w-[242px] xl:w-[298px] 2xl:w-[320px] font-semibold text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
          <h2 className=" relative order-1  lg:order-2 uppercase text-6xl sm:text-[80px] md:text-[90px] lg:text-[120px] text-center lg:text-end text-white  font-extrabold xl:text-[130px] xl:leading-[96%]">how we<br />work</h2>
        </div>

        <Pictures />

        <Button type={'button'} text={'contact us'} className={` block m-auto mt-3 mb-2 text-center lg:mb-5 xl:mb-6 xl:mt-5 relative z-30`} />

      </main>

    </section>
  </>
}

export default HowWeWork