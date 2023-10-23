// @ts-nocheck
import './Home.module.scss'
import logo from '../../assets/logo.png'
import paper from '../../assets/landing.png'
import slice2 from '../../assets/slice2.png'
import mainPic from '../../assets/6f39d7c1fa54db03d2e135c0065f91e2.png'
import TextLorem from '../../assets/asde.png'
import badge from '../../assets/Star 1.svg'
import { Button, Header, Icons } from '@/components'
import HowWeWork from '../How-We-Work/How-We-Work'
import About from '../About/About'
import Recipes from '../Recipes/Recipes'
import Testymonials from '../Testymonials/Testymonials'
import Contact from '../Contact/Contact'

const Home = () => {

  return <>

    <section className=' home text-white  '>
    <div className='opacity'></div>

      {/* <div className='Ellipse w-[20px] h-[20px]'></div> */}
      <div className="grid-row  md:grid grid-cols-12 ">

        <div className='left-land col-span-8 pt-4 px-4 '>
          <Header />
          <div className='main-content flex flex-col justify-center items-center text-center md:items-start md:text-start'>
            <h1 className='font-extrabold text-6xl mb-5  md:text-4xl lg:text-[50px] xl:text-6xl 2xl:text-[70px]'>TASTY PASTRIES</h1>
            <p className='  md:w-[320px] md:text-base lg:text-base lg:w-[500px] xl:text-lg xl:w-[540px] 2xl:text-2xl 2xl:w-[550px] font-semibold  leading-relaxed mb-8'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The</p>
            <Button text='see more' />
            <div className='hidden md:block absolute bottom-0 md:w-[75px] md:h-[160px] md:left-[-16px] lg:w-[100px] lg:h-[180px] lg:left-[-16px]  xl:w-[81px] xl:h-[220px] xl:left-[-16px] 2xl:h-[190px] bg-white overflow-hidden'>
              <img src={slice2} className='  opacity-40 z-10 h-full object-center' alt=" slice2" />
            </div>
            <Icons />
            <span className='hidden md:block absolute md:bottom-3 md:left-[16%]  lg:bottom-2  xl:left-[12%] text-lg font-bold leading-relaxed'>Telephone: +7 700 000 00 00</span>
          </div>
        </div>



        <div className='relative md:static right-land flex flex-col col-span-4  '>

          <img src={TextLorem} className='absolute w-[280px]  top-[110%] left-[25%] hidden  xl:top-[27%]  xl:left-[59%] z-30 ' alt="TextLorem" />

          <img src={mainPic} className='absolute  top-[20%] md:w-[450px] md:top-[38%] md:left-[44%] lg:w-[600px] lg:h-[400px] lg:top-[38%] lg:left-[4%] xl:w-[666px] xl:h-[413px] xl:top-[34%] xl:left-[43%] 2xl:w-[750px] 2xl:h-[440px] 2xl:top-[30%] 2xl:left-[46%]  z-30' alt="mainPicture" />

          <img src={badge} className='absolute w-[130px] top-[55%] left-[40%] sm:w-[170px] sm:top-[57%] md:w-[110px] md:top-[65%] md:left-[61%] lg:w-[160px] lg:top-[74%] lg:left-[60%] xl:w-[170px] 2xl:left-[62%] z-40' alt="Quality Badge" />


        </div>

      </div>

    </section>

    <HowWeWork/>
    <About/>
    <Recipes/>
    <Testymonials/>
    <Contact/>
  </>
}

export default Home


// {/* <section className=' p-3 m-auto bg-mainColor relative z-[-1] '>
// <div className="container ">
// <header className=' text-white  '>
//   <nav className='flex '>
//     <img src={logo} className='w-12 h-12 object-contain' alt="logo" />
//     <span className='logo-text inline-block ml-3 font-bold  '>PEACHY PUP
//       <br />
//       Bakery
//     </span>
//   </nav>
// </header>


//   <main className='flex ' >


//     <div className='bg-mainColor' >
//     </div>

//     <div className='h-screen w-[28%] fixed top-0 bottom-0 right-0 z-50'>
//       {/* <img src={paper} className=' w-full h-full z-10' alt=" paper" /> */}
//     </div>
//   </main>
// </div>
// </section> */}