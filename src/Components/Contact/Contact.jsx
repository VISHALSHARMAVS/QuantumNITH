/* eslint-disable no-unused-vars */
import ContactBtn from "./ContactBtn";
import contact from '../../assets/contact.png';
import './Contact.css';
import { useState } from "react";
import ModalForm from "../ModalForm/ModalForm";

function Contact() {
  const [open, setOpen] = useState(false);
  const [result, setResult] = useState("");
  const [resultColor, setResultColor] = useState("black")
  const apiKey = import.meta.env.VITE_API_KEY;
  
  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    
    const formData = new FormData(event.target);
    formData.append("access_key", apiKey);
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        setResult("Form Submitted Successfully");
        setResultColor('green')
        event.target.reset();
    } else {
        console.error("Error", data);
        setResult(data.message);
        setResultColor('red')
    }
} catch (error) {
    console.error("Submission error", error);
    setResult("An error occurred while submitting the form.");
    setResultColor('red')
    }
  };

  return (
    <div className='contactus'>
      <div className="contact">
        <div className="contactText">
          <h3>Send Us A Message</h3>
          <p>We welcome inquiries from prospective students, faculty, and industry partners. Our dedicated team is available to assist you with any questions or information you may need about our academic programs, research initiatives, or campus life.</p>
          
          <ul>
            <li><span>Address: </span> QuantumNith University, Hamirpur, Himachal Pradesh, 177005, India</li>
            <li><span>Mobile Number:</span> 7425029426</li>
            <li><span>Email:</span> info@quantumnith.edu.in</li>
            <li><span>Website:</span> www.quantumnith.edu.in</li>
          </ul>
          
          <div className="contactBtn">
            <ContactBtn className="btn1" onClick={onOpen}>Schedule a Visit</ContactBtn>
            <ContactBtn>Apply Now</ContactBtn>
          </div>
        </div>
        <div className="contactImg">
          <img src={contact} alt="Contact" />
        </div>
      </div>
      
      <ModalForm isOpen={open} onClose={onClose}>
        <form onSubmit={onSubmit}>
          <label htmlFor="name">Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />
          
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" name="phone" placeholder="Enter Your Phone Number" required />
          
          <label htmlFor="message">Enter Your Message here</label>
          <textarea name="message" rows="6" placeholder="Enter Your Message" required></textarea>
          
          <div className="button">
            <button type="submit" className="btn submitBtn">Submit Now</button>
          </div>
        </form>
        <p  style={{ color: resultColor } } className="result" >{result}</p>
      </ModalForm>
    </div>
  );
}

export default Contact;
