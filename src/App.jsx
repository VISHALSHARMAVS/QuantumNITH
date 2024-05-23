
import './App.css'
import About from './Components/About/About'
import Admission from './Components/Admission/Admission'
import Campus from './Components/Campus/Campus'
import Contact from './Components/Contact/Contact'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'

function App() {


  return (
   <div>
    <Navbar/>
    <Hero/>
    <div className="container">
      <Title subTitle="Our Program" title="What We Offer" />
     <Programs/>
    <About/>
      <Title subTitle="Our Campus" title="Campus Life" />
      <Campus/>
      <Title subTitle="Admission" title="Apply Now" />
      <Admission/>
      <Title subTitle="Contact QuantumNith" title="Get In Touch" />
      <Contact/>
    </div>
   </div>
  )
}

export default App
