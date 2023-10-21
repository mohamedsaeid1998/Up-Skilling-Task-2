// @ts-nocheck
import logo from '../assets/logo.png'
const Header = () => {


  return <>
    <header className='flex '>
      <img src={logo} className='w-12 h-12 object-contain' alt="logo" />
      <span className='logo-text inline-block ml-3 font-bold  '>PEACHY PUP
        <br />
        Bakery
      </span>
    </header>
  </>
}

export default Header