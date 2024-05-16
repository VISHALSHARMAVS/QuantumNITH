import './Navbar.css'
import Logo from '../../assets/logo-removebg-preview.png'
import { useState } from 'react'
import { useEffect } from 'react'
function Navbar() {
  const [sticky,setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setSticky(true):setSticky(false);
    })
  },[])
  return (
    <nav className={`container ${sticky ? "darkNav":''}`}>
        <img src={Logo} alt="logo" className='logo'/>
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About Us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
    </nav>
  )
}

export default Navbar