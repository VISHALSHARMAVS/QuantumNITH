import './Programs.css'
import P1 from "../../assets/P1.png"
import P2 from "../../assets/P2.png"
import P3 from "../../assets/P3.png"


function Programs() {
  return (
    <div className='programs'>
        <div className="program">
            <img src={P1} alt="" />
            <div className="caption">
               
                <h3> Undergraduate Programs </h3>
                <p>QuantumNith offers a diverse range of undergraduate programs in engineering, including Computer Science, Electrical, Mechanical, Civil, and more. Each program is designed to provide a comprehensive education, equipping students with the knowledge and skills needed to excel in their chosen field.</p>
            </div>
        </div>
        <div className="program">
            <img src={P2} alt="" />
            <div className="caption">
              
                <h3>Postgraduate Programs</h3>
                <p>{`For those seeking to further their education, QuantumNith's postgraduate programs provide advanced training and research opportunities. From Master's degrees to Doctoral programs, the institution's world-class faculty and cutting-edge facilities ensure that students receive an unparalleled learning experience.`}
</p>
            </div>
        </div>
        <div className="program">
            <img src={P3} alt="" />
            <div className="caption">
            
                <h3>Executive Education</h3>
                <p>QuantumNith also caters to working professionals with its Executive Education programs. These tailored offerings provide opportunities for lifelong learning, skill development, and career advancement, keeping participants at the forefront of their respective industries.</p>
            </div>
        </div>
    </div>
  )
}

export default Programs