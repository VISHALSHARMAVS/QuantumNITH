import Eligible from '../../assets/Eligible.png'
import Application from '../../assets/Application.png'
import Scolarship from '../../assets/Scolarship.png'
import Visit from '../../assets/Visit.png'
import './Admission.css'
function Admission() {
  return (
    <div className='application'>
        <div className="program">
            <img src={Eligible} alt="" />
            <div className="caption">
                <h3> Eligibility Criteria </h3>
                <p>QuantumNith welcomes applications from high-achieving students who have excelled in their academic pursuits. Applicants must meet the specified eligibility criteria, which include strong performance in national-level entrance examinations and relevant academic qualifications.</p>
            </div>
        </div>
        <div className="program">
            <img src={Application} alt="" />
            <div className="caption">
              
                <h3>Application Process</h3>
                <p>{`The application process for QuantumNith is designed to be straightforward and user-friendly. Prospective students can submit their applications online, providing the necessary documentation and fulfilling the required steps to be considered for admission.`}
</p>
            </div>
        </div>
        <div className="program">
            <img src={Scolarship} alt="" />
            <div className="caption">
            
                <h3>Scholarship Opportunities</h3>
                <p>QuantumNith offers a range of scholarship opportunities to support talented and deserving students. These scholarships are awarded based on academic merit, financial need, and other factors, ensuring that the institution remains accessible to students from diverse backgrounds.
</p>
            </div>
        </div>
        <div className="program">
            <img src={Visit} alt="" />
            <div className="caption">
                <h3>Campus Visits</h3>
                <p>{`Prospective students are encouraged to visit the QuantumNith campus to experience the vibrant community and state-of-the-art facilities firsthand. Campus tours and information sessions provide valuable insights into the institution's academic programs, student life, and overall learning environment.`}
</p>
            </div>
        </div>
    </div>
  )
}

export default Admission