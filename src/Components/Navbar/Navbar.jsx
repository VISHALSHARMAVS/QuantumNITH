import './Navbar.css'
import Logo from '../../assets/logo-removebg-preview.png'
function Navbar() {
  return (
    <nav className='container'>
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