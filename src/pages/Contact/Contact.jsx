import { Button } from '@/components'
import './Contact.module.scss'
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { ContactSendData } from '@/store/Features/ContactSlice';


const Contact = () => {

  const { register, handleSubmit, reset } = useForm()

  //<<<<<<<<<<<<<< دي فانكشن بتاعت الريدكس >>>>>>>>>>>>>>>>>>>>

  // let dispatch = useDispatch()

  // const sendData = async (data) => {
  //   let { name, email, phone } = data
  //   // @ts-ignore
  //   const res = await dispatch(ContactSendData({ name, email, phone }))
  //   window.alert(res?.payload?.data?.message)
  // }


  const sendData = async (data) => {
    const { name, email, phone } = data
    let res = await axios.post('http://upskilling-egypt.com:3000/contact', {
      name,
      email,
      phone
    })

    window.alert(res?.data?.message)
    reset()
  }



  return <>
    <section id="contact">
      <main className='mt-3 mb-6'>
        <h2 className="uppercase text-mainColor text-center text-6xl font-extrabold xl:text-[144px] xl:leading-[96%]">Contact Us</h2>
        <div className='flex flex-col lg:flex-row justify-evenly items-center'>

          <form onSubmit={handleSubmit(sendData)} className='flex flex-col  mt-14 gap-4'>
            <input {...register("name")} required type="text" className='px-5 py-4 input-style' placeholder='Full Name' />
            <input {...register("email")} required type="email" className=' px-5 py-4 input-style ' placeholder='Email' />
            <input {...register("phone")} required type="tel" className='px-5 py-4 input-style ' placeholder='Phone Number' />
            <Button linkstyle={''} type={'submit'} text={'send'} className={` m-auto rounded-[61px] border-4 text-black border-[#C98A40] bg-white xl:mb-0 `} />
          </form>

          <ul className='flex flex-col gap-4 mt-3 lg:mt-0 lg:gap-9 '>
            <li className='flex items-center gap-5 '><i className='text-2xl text-mainColor'><MdEmail /></i> <a href="mailto:upskilling.eg1@gmail.com"><span className='text-[#333] text-sm'>upskilling.eg1@gmail.com</span></a></li>
            <li className='flex items-center gap-5 '><i className='text-2xl text-mainColor'><BsFillTelephoneFill /></i> <span className='text-[#333] text-sm'>+20 115 493 2137</span> </li>

          </ul>
        </div>
      </main>
    </section>
  </>
}

export default Contact