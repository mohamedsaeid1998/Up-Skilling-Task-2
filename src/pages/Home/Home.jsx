import './Home.module.scss'
// @ts-ignore
import slice2 from '../../assets/slice2.png'
// @ts-ignore
import mainPic from '../../assets/sandwish.png'
// @ts-ignore
import TextLorem from '../../assets/asde.png'
// @ts-ignore
import badge from '../../assets/Star 1.svg'
import { Button, Header, Icons } from '@/components'
import HowWeWork from '../How-We-Work/How-We-Work'
import About from '../About/About'
import Recipes from '../Recipes/Recipes'
import Testymonials from '../Testymonials/Testymonials'
import Contact from '../Contact/Contact'

const Home = () => {

  return <>

    <section className=' home text-white p-4 pb-0  '>
      <div className='opacity h-full hidden lg:block'></div>

      <div className='hidden lg:block Ellipse w-[20px] h-[20px] left-[25%] 2xl:left-[40%]'></div>

      <Header />
      <main className='main-content  flex flex-col lg:flex-row justify-center lg:items-center 2xl:justify-between'>
        <div className='left flex flex-col items-center lg:items-start  '>
          <h1 className=' text-center mt-16 lg:mt-0  text-5xl sm:text-6xl lg:text-start font-extrabold xl:text-[58px] xl:w-[549px] 2xl:text-[70px] 2xl:w-[700px]  '>TASTY PASTRIES</h1>
          <p className=' text-center  sm:text-lg lg:text-start mt-3  md:w-[400px] lg:w-[552px] lg:text-lg mb-9 font-semibold  leading-relaxed 2xl:text-[22px] ' >Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The</p>

          <Button linkstyle={'m-st'} text={'see more'} type={"button"} className={"m-auto lg:ms-0 "} />

          <div className='hidden lg:block absolute bottom-0 md:w-[75px] md:h-[160px] md:left-[-16px] lg:w-[100px] lg:h-[155px] lg:left-[-16px]  xl:w-[81px] xl:h-[180px] xl:left-[-16px] 2xl:h-[145px] bg-white overflow-hidden'>
            <img src={slice2} className='  opacity-40 z-10 h-full object-center' alt=" slice2" />
          </div>
          <Icons />
          <span className='hidden lg:block absolute md:bottom-3 md:left-[16%] lg:bottom-2 xl:left-[8%] text-lg font-bold leading-relaxed'>Telephone: <span className='tracking-[8px]'>+7 700 000 00 00</span></span>
        </div>

        <div className='right relative m-auto'>

          <img src={TextLorem} className=' here hidden xl:block  absolute  top-0  right-[-8px] 2xl:right-[15px] z-30  ' alt="TextLorem" />
          <img src={mainPic} className=' my-16 lg:mt-16 ' alt="mainPicture" />
          <img src={badge} className='absolute top-[60%] right-[30%]  w-[120px] sm:w-[160px] lg:top-[70%] lg:right-[35%] z-40' alt="Quality Badge" />

        </div >

      </main >

    </section >

    <HowWeWork />
    <About />
    <Recipes />
    <Testymonials />
    <Contact />
  </>
}

export default Home

