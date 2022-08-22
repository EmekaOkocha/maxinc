import React from "react";
import maxinlogo from './maxinlogo.jpeg';
import pin from './pin.png';
import reddit from './reddit.png';
import you from './you.png';

function Contact() {

  return (
    <div>
      <div>
      <h3>We are here for your orders 24/7</h3>
        <p></p>
      </div>
    <div className="contactdiv">
      
      <form className="formdiv">
        <label><h3>WRITE TO US</h3></label>
        <label>
          Your Fullname:
          </label>
        <input type="text" placeholder="fullname" required />
        <label>
          Your Email:
          </label>
        <input type="email" placeholder="email" required/>
        <label>
          Your Message:
          </label>
          <textarea required/>
        <label>
        <input type="submit" value="Submit" />
        </label>
          
      </form>
      <div>
        <h3> You fancy a quick chat?</h3>
        <button className="quickchat">Click to chat</button>
      </div>
      <div>
        <h3> Our Socials</h3>
          <img src={pin} alt="facebook" className="cntSocial"></img>
          <img src={reddit} alt="facebook" className="cntSocial"></img>
          <img src={you} alt="facebook" className="cntSocial"></img>
      
      </div>
      


    </div>
      </div>
  )
}
export default Contact;