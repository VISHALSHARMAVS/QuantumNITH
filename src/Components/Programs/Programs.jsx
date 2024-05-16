import './Programs.css'
import P1 from "../../assets/P1.png"
import P2 from "../../assets/P2.jpeg"
import P3 from "../../assets/P3.jpeg"
import L1 from "../../assets/L1.jpg"
import L2 from "../../assets/L2.png"
import L3 from "../../assets/L3.jpeg"

function Programs() {
  return (
    <div className='programs'>
        <div className="program">
            <img src={P1} alt="" />
            <div className="caption">
                <img src={L1} alt="" />
                <p> Full Stack Development </p>
            </div>
        </div>
        <div className="program">
            <img src={P2} alt="" />
            <div className="caption">
                <img src={L3} alt="" />
                <p> Civil Engineering </p>
            </div>
        </div>
        <div className="program">
            <img src={P3} alt="" />
            <div className="caption">
                <img src={L2} alt="" />
                <p> Data Science </p>
            </div>
        </div>
    </div>
  )
}

export default Programs