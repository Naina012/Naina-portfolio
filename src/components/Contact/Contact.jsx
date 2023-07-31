import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {PiLinkedinLogoBold} from 'react-icons/pi'
import {FaWhatsapp} from 'react-icons/fa'
const Contact = () => {
  return (
    <section id='Contact'>
      {/* <h5 className='h5con'>Get In Touch</h5> */}
      <h2 className='h2con'>Get In Touch</h2>

      <div className='container contact_container'>
        <div className='contact_options'>
          <article className="contact_option">
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>nainakaushik928@gmail.com</h5>
            <a href="mailto:nainakaushik928@gmail.com">Send a message</a>
          </article>
          <article className="contact_option">
            <PiLinkedinLogoBold className='contact_option-icon'/>
            <h4>linkedin</h4>
            <h5>naina0109</h5>
            <a href="https://www.linkedin.com/in/naina0109/">Send a message</a>
          </article>
          <article className="contact_option">
            <FaWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+917901968155</h5>
            <a href="https://wa.me/+917901968155">Send a message</a>
          </article>
        </div>
        <form action="mailto:123aasii456@gmail.com" method="post" enctype="text/plain">
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact