import { Button, TestCard } from '@/components'
import './Testymonials.module.scss'

const Testymonials = () => {

  return <>
    <section className='Testymonials py-[15px]'>
      <div className='cover'></div>
      <main className='relative z-20'>

        <h2 className="uppercase text-[45px] sm:text-[65px] md:text-[85px] lg:text-[100px] text-white mt-4 lg:mt-3 text-center font-extrabold xl:text-[144px] xl:leading-[96%]">testymonials</h2>

        <div className='grid grid-cols-1 md:grid-cols-2 px-4  gap-4 mt-1  sm:mt-0 md:px-16 md:mt-4  sm:gap-4 md:gap-6 lg:gap-12 2xl:mt-10 '>
          <TestCard />
        </div>
        <Button type={'button'} text={'contact us'} className={` block  m-auto mt-5 sm:mt-3  md:mt-6 lg:mt-4  xl:mb-0 relative z-40`} />
      </main>
    </section>
  </>
}

export default Testymonials