
import './App.css'
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
    </div>
   </div>
  )
}

export default App
