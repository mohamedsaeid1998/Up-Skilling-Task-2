import { Button, TestCard } from '@/components'
import './Testymonials.module.scss'

const Testymonials = () => {

  return <>
<section className='Testymonials'>
  <div className='cover'></div>
<main className='relative z-20'>

<h2 className="uppercase text-white mt-3 text-center text-6xl font-extrabold xl:text-[144px] xl:leading-[96%]">testymonials</h2>

  <div className='grid grid-cols-2 gap-10 mt-16 px-16'>
<TestCard/>
<TestCard/>
<TestCard/>
<TestCard/>
  </div>
  <Button type={'button'} text={'contact us'} className={` block m-auto mt-6 xl:mb-0 relative z-40`} />
</main>
</section>
    </>
}

export default Testymonials