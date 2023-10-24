import './Recipes.module.scss'
// @ts-ignore
import img1 from '../../assets/Recipes 1.jpg'
// @ts-ignore
import img2 from '../../assets/Recipes 2.jpg'
// @ts-ignore
import img3 from '../../assets/Recipes 3.jpg'
import { Button, RecCard } from '@/components'
const Recipes = () => {

  return <>
    <section className=' recipes px-4 py-[18px]  '>
      <main className='flex flex-col'>

        <h2 className="uppercase sm:text-[65px] md:text-[90px] lg:text-[120px] text-center text-mainColor text-6xl font-extrabold xl:text-[125px] xl:leading-[96%]">Recipes</h2>

        <div className='card flex flex-col md:flex-row justify-between gap-5 xl:gap-10 mt-3'>
          <RecCard />
        </div>

        <Button type={'button'} text={'contact us'} className={`  m-auto mt-3 xl:mb-0`} />

      </main>
    </section>
  </>
}

export default Recipes