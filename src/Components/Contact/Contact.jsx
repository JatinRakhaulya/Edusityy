import React,{useState }from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "cad3e2bd-d1d8-468c-8dff-3aba247063a7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col">
         <h3>Send us a message<img src={msg_icon} alt=''/></h3>
         <p>Feel free to reach out through contact form or find our contact 
            information below.Your feedback,questions and suggestions are 
            important to us as we strive to provide exceptional service to our
            university community.

         </p>
            <ul>
                <li><img src={mail_icon} alt=''/>Contact@jatin@gmail.com</li>
                <li><img src={phone_icon} alt=''/>+1 123-456-7890</li>
                <li><img src={location_icon} alt=''/>77 Crossing Republic ,Cambridge <br/>MA 02319,united states</li>
            </ul>

         
        </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type='text' name='name' placeholder='Enter your name'
            required/>
            <label>Phone number</label>
            <input type='tel'name='phone' placeholder='Enter your mobile Number'
            required/>
            <label>Enter your msg here</label>
            <textarea name='message' rows='6' placeholder='enter your msg' required></textarea>
            <button type='submit' className='btn dark-btn'>submit now<img src={white_arrow} alt=''/></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
