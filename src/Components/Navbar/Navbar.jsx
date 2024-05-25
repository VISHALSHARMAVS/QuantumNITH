import './Navbar.css'
import Logo from '../../assets/logo-removebg-preview.png'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-scroll'
import menu from '../../assets/menu.svg'
function Navbar() {
  const [sticky,setSticky] = useState(false)
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setSticky(true):setSticky(false);
    })
  },[])
  const[mobileMenu,setMobileMenu]=useState(false)
  const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }
  return (
    <nav className={`container ${sticky ? "darkNav":''}`}>
        <img src={Logo} alt="logo" className='logo'/>
        <ul className={mobileMenu ? "":"hideMenu"}>
            <li><Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
            <li><Link to='program' smooth={true} offset={-290} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
            <li><Link to='campus' smooth={true} offset={-300} duration={500}>Campus</Link></li>
            <li><Link to='application' smooth={true} offset={-250} duration={500}>Admission</Link></li>
            {/* <li> */}
              <button className='btn'><Link to='contactus' smooth={true} offset={-200} duration={500}>Contact Us</Link></button>
              {/* </li> */}
        </ul>
       <img src={menu} alt="" className='menuIcon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar