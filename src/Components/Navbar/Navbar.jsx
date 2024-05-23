import './Navbar.css'
import Logo from '../../assets/logo-removebg-preview.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'
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
            <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='program' smooth={true} offset={-290} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-300} duration={500}>Campus</Link></li>
            <li><Link to='application' smooth={true} offset={-250} duration={500}>Admission</Link></li>
            <li><button className='btn'><Link to='contactus' smooth={true} offset={-200} duration={500}>Contact Us</Link></button></li>
        </ul>
    </nav>
  )
}

export default Navbar