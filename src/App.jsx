
import './App.css'
import About from './Components/About/About'
import Admission from './Components/Admission/Admission'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import './media.css'
function App() {


  return (
   <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle="Our Program" title="What We Offer" />
     <Programs/>
      <Title subTitle="About University" title="India's Premier Engineering College" />
    <About/>
      <Title subTitle="Our Campus" title="Campus Life" />
      <Campus/>
      <Title subTitle="Admission" title="Apply Now" />
      <Admission/>
      <Title subTitle="Contact QuantumNith" title="Get In Touch" />
      <Contact/>
    </div>
      <Footer/>
   </div>
  )
}

export default App
