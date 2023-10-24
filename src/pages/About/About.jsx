import { Button } from '@/components'
import './About.module.scss'
// @ts-ignore
import chef from '../../assets/chef.png'
const About = () => {

  return <>
    <section className=' about text-white p-4 relative z-50 '>
      <main className='flex flex-col lg:flex-row'>
        <div className=' flex flex-col lg:gap-5 lg:w-[700px] xl:w-[550px] '>
          <h2 className=" uppercase text-6xl  sm:text-[80px] md:text-[90px] lg:text-[120px] text-center lg:text-start text-white  font-extrabold xl:text-[125px] xl:leading-[96%]">about<br />us</h2>
          <p className=' mt-4 text-center lg:text-start leading-relaxed  font-semibold text-sm md:text-base lg:text-lg mb-4 '>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Button type={'button'} text={'contact us'} className={` m-auto lg:m-0 text-center  xl:mb-0 `} />
        </div>
        <div className=' m-auto '>
          <img src={chef} className=' block text-center m-auto mt-4 w lg:mt-0 ml-0 lg:ml-10 lg:pr-12 w-fit h-fit md:w-[400px] lg:w-full lg:h-fit rounded-[10px]' alt="chef" />
        </div>

      </main>

    </section>
  </>
}

export default About