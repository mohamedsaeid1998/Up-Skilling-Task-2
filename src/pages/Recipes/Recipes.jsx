import './Recipes.module.scss'
// @ts-ignore
import img1 from '../../assets/Recipes 1.jpg'
// @ts-ignore
import img2 from '../../assets/Recipes 2.jpg'
// @ts-ignore
import img3 from '../../assets/Recipes 3.jpg'
import { Button } from '@/components'
const Recipes = () => {

  return <>
    <section className=' recipes px-4 pt-4 '>
      <main className='flex flex-col'>

        <h2 className="uppercase text-center text-mainColor text-6xl font-extrabold xl:text-[125px] xl:leading-[96%]">Recipes</h2>

        <div className='card flex justify-between gap-5 mt-3'>

          <div className='  rounded-[30px] border border-orange-200 '>

            <img src={img3} className='w-[381px] h-[300px]  rounded-tl-[30px] rounded-tr-[30px]' alt="img" />
            <div className='px-6 pt-2'>
              <h3 className='text-mainColor text-base font-black '>Bread omelette </h3>
              <p className='text-sm  mt-2 w-[325px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>

          </div>
          <div className=' rounded-[30px] border border-orange-200 '>

            <img src={img2} className='w-[381px] h-[300px]  rounded-tl-[30px] rounded-tr-[30px]' alt="img" />
            <div className='px-6 pt-2'>
              <h3 className='text-mainColor text-base font-black '>Breakfast Potatoes</h3>
              <p className='text-sm  mt-2 w-[325px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>

          </div>
          <div className=' rounded-[30px] border border-orange-200  '>

            <img src={img1} className='w-[381px] h-[300px]  rounded-tl-[30px] rounded-tr-[30px]' alt="img" />
            <div className='px-6 pt-2'>
              <h3 className='text-mainColor text-base font-black '>Home-made Mandazi</h3>
              <p className='text-sm  mt-2 w-[325px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
            </div>


          </div>

        </div>

        <Button text={'contact us'} className={`  m-auto mt-3 xl:mb-0`} />

      </main>
    </section>
  </>
}

export default Recipes