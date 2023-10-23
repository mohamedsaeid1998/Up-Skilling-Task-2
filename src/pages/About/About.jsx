import { Button } from '@/components'
import './About.module.scss'
// @ts-ignore
import chef from '../../assets/chef.png'
const About = () => {

  return <>
    <section className=' about text-white p-4 '>
      <main className='flex'>
        <div className='flex flex-col'>
          <h2 className="uppercase text-6xl font-extrabold xl:text-[125px] xl:leading-[96%]">about<br />us</h2>
          <p className=' mt-6 leading-relaxed xl:w-[508px] font-semibold text-lg'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <Button text={'contact us'} className={` mt-3 text-center xl:mb-0`} />
        </div>
        <img src={chef} className=' ml-10 xl:w-[620px] xl:h-[670px] rounded-[10px]' alt="chef" />
      </main>

    </section>
  </>
}

export default About