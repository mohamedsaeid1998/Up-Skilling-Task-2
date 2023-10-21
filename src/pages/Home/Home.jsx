// @ts-nocheck
import './Home.module.scss'
import logo from '../../assets/logo.png'
import paper from '../../assets/landing.png'
import slice2 from '../../assets/slice2.png'
import mainPic from '../../assets/6f39d7c1fa54db03d2e135c0065f91e2.png'
import TextLorem from '../../assets/asde.png'
import badge from '../../assets/Star 1.svg'
import { Header, Icons } from '@/components'

const Home = () => {

  return <>
    <section className='landing text-white md:h-screen  '>


    {/* <div className='Ellipse w-[20px] h-[20px]'></div> */}
      <div className="grid-row grid-rows-none md:grid grid-cols-12  ">

        <div className='left-land col-span-8 bg-mainColor pt-4 px-4'>
          <Header />
          <div className='main-content flex flex-col justify-center items-center text-center md:items-start md:text-start   '>
            <h1 className='font-extrabold text-6xl mb-5 '>TASTY PASTRIES</h1>
            <p className='  xl:text-lg xl:w-[540px]  font-semibold  leading-relaxed mb-8'>Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting Industry. Lorem Ipsum Has Been The Industry's Standard Dummy Text Ever Since The</p>
            <button className='uppercase bg-buttonColor font-black rounded-[30px]  h-[50px] w-[170px] sm:w-[250px] xl:mb-20  '>see more</button>
            <div className='absolute bottom-0 left-[-29%] bg-white overflow-hidden'>
              <img src={slice2} className='  opacity-40 z-10 hidden' alt=" slice2" />
            </div>
              <Icons/>
          </div>
        </div>



        <div className='relative lg:static right-land flex flex-col  col-span-4  '>

<img src={paper} className='paper opacity-40 object-fill  md:h-screen ' alt="right-background" />
          <img src={TextLorem} className='absolute w-[280px]  top-[110%] left-[25%] hidden  xl:top-[27%]  xl:left-[59%] z-30 ' alt="TextLorem" />

<img src={mainPic} className='absolute  top-[20%]  xl:w-[666px] xl:h-[413px] xl:top-[34%] xl:left-[40%] z-30' alt="mainPicture" />

<img src={badge} className='absolute w-[100px] top-[55%] left-[38%] sm:w-[160px] sm:top-[150%]  xl:top-[74%] xl:left-[62%] z-40' alt="Quality Badge" />


        </div>

      </div>

    </section>

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