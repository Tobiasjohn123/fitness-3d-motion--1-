import React, { useState } from 'react'
import { FaEnvelope, FaInstagram, FaTwitter, FaPaperPlane } from 'react-icons/fa'

export default function Contact({ contactDetails }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Message sent! Coach Alex will get back to you within 24 hours.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="contact" id="contact">
      <div className="contact-header" data-aos="fade-up">
        <p className="section-tag">Get In Touch</p>
        <h2>Ready To <span>Transform?</span></h2>
        <p className="contact-subtext">Book a free 15-minute consultation. No commitment, no pressure.</p>
      </div>
      <div className="contact-container">
        <div className="contact-cards">
          <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
            <div className="contact-icon"><FaEnvelope color="#00d4ff" size={20}/></div>
            <div>
              <h4>Email</h4>
              <p>{contactDetails.email}</p>
            </div>
          </div>
          <div className="contact-card" data-aos="fade-up" data-aos-delay="200">
            <div className="contact-icon"><FaInstagram color="#00d4ff" size={20}/></div>
            <div>
              <h4>Instagram</h4>
              <p>{contactDetails.instagram}</p>
            </div>
          </div>
          <div className="contact-card" data-aos="fade-up" data-aos-delay="300">
            <div className="contact-icon"><FaTwitter color="#00d4ff" size={20}/></div>
            <div>
              <h4>Twitter</h4>
              <p>{contactDetails.twitter}</p>
            </div>
          </div>
        </div>
        <div className="contact-form" data-aos="fade-up" data-aos-delay="400">
          <div className="form-row">
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange}/>
            <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange}/>
          </div>
          <textarea name="message" placeholder="Tell me about your fitness goals..." rows={5} value={formData.message} onChange={handleChange}/>
          <button onClick={handleSubmit} className="submit-btn">
            <FaPaperPlane size={14}/> Send Message
          </button>
        </div>
      </div>
    </section>
  )
}
