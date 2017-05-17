import React from 'react'
import './ContactMe.scss'

const ContactMe = () => {
  return (
    <div className='ContactMe-container' id='contact'>
      <h1>Contact Me</h1>
      <form className='ContactMe-form-container'>
        <input
          placeholder='Your Name' />
        <input
          placeholder='Your Email' />
        <input
          placeholder='Your Phone' />
        <textarea
          rows='5'
          placeholder='Your Message' />
        <button className='ContactMe-form-button'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactMe
