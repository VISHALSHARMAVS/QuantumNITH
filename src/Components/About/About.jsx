import './About.css'
import AboutImg from '../../assets/About.png'


function About() {
  return (
    <div className='about'>
        <div className="aboutLeft">
            <img src={AboutImg} alt="" />
        </div>
        <div className="aboutRight">
      {/* <h3>About University</h3> */}
      {/* <h2>{`India's Premier Engineering College`}</h2> */}
       <p> Nestled in the heart of India, QuantumNith is a world-class engineering 
institution that has been shaping the minds of aspiring innovators for 
decades. With a relentless pursuit of academic excellence, state-of-the-art facilities, and a dynamic, diverse community, QuantumNith is the 
destination of choice for students seeking to unlock their true potential.</p>
        </div>
    </div>
  )
}

export default About