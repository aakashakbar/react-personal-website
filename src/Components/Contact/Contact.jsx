import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {SiFiverr} from 'react-icons/si'
import './contact.css'

const Contact = () => {
    return (
        <section id="contact">
        <h1>Contact Me</h1>
        <h5>And I will answer your queries</h5>

        <div className='row'>
            <div className='column contact-form-column'>
                <form>
                    <input type='text' name='name' placeholder='Enter Your Name'></input>
                    <input type='email' name='email' placeholder='Enter Your Email Address'></input>
                    <textarea name='message' placeholder='Enter Your Message' rows="5"></textarea>
                    <button type='submit' name='submit' className='btn btn-primary'>Send Message</button>
                    
                </form>
            </div>

            <div className='column contact-options-column'>
                <h2>You can also Contact me here</h2>
                <div className='contact-card'>
                    <FaWhatsapp className='contact-icons' />
                    <h5>Whatsapp</h5>
                    <a href='https://wa.me/+923366040292' target='_blank' rel="noreferrer">+923366040292</a>
                </div>
                
                <div className='contact-card'>
                    <HiOutlineMail className='contact-icons' />
                    <h5>Email</h5>
                    <a href='mailto:aakashakbar2@gmail.com' target='_blank' rel="noreferrer">aakashakbar2@gmail.com</a>
                </div>

                <div className='contact-card'>
                    <SiFiverr className='contact-icons' />
                    <h5>Fiverr</h5>
                    <a href='https://fiverr.com/aakashakbar' target='_blank' rel="noreferrer">fiverr.com/aakashakbar</a>
                </div>
            </div>

        </div>
        </section>
    )
}

export default Contact;