import './Campus.css'
import Student from '../../assets/student.png'
import Culture from '../../assets/culture.png'
import Facilities from '../../assets/facilities.png'

function Campus() {
  return (
    <div className='programs'>
    <div className="program">
        <img src={Student} alt="" />
        <div className="caption">
           
            <h3>Vibrant Student Community</h3>
            <p>QuantumNith boasts a diverse and engaged student community, where individuals from all backgrounds come together to learn, grow, and thrive. Students actively participate in a wide range of clubs, societies, and extracurricular activities, fostering a dynamic and inclusive campus culture.</p>
        </div>
    </div>
    <div className="program">
        <img src={Facilities} alt="" />
        <div className="caption">
          
            <h3>Cutting-Edge Facilities</h3>
            <p>{`The QuantumNith campus is equipped with cutting-edge facilities, including modern laboratories, well-stocked libraries, state-of-the-art computer centers, and world-class sports and recreation amenities. These resources ensure that students have access to the tools and resources they need to excel in their academic and personal pursuits.`}</p>
        </div>
    </div>
    <div className="program">
        <img src={Culture} alt="" />
        <div className="caption">
        
            <h3>Vibrant Cultural Events</h3>
            <p>QuantumNith celebrates its rich cultural diversity through a vibrant calendar of events, festivals, and celebrations. From music and dance performances to cultural exhibitions and guest lectures, these activities promote cross-cultural understanding and enrich the overall campus experience.</p>
        </div>
    </div>
</div>
  )
}

export default Campus