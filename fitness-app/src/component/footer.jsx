import React from 'react'
import { FaInstagram, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa'

export default function Footer({ contactDetails }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand" data-aos="fade-up" data-aos-delay="100">
          <h2>Coach <span>Alex</span></h2>
          <p>Helping busy professionals transform their bodies and build confidence — one rep at a time.</p>
          <div className="footer-socials">
            <a href={contactDetails.instagramUrl} target="_blank" rel="noreferrer"><FaInstagram size={18}/></a>
            <a href={contactDetails.twitterUrl} target="_blank" rel="noreferrer"><FaTwitter size={18}/></a>
            <a href={`mailto:${contactDetails.email}`}><FaEnvelope size={18}/></a>
          </div>
        </div>
        <div className="footer-links" data-aos="fade-up" data-aos-delay="200">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-services" data-aos="fade-up" data-aos-delay="300">
          <h4>Programs</h4>
          <ul>
            <li><a href="#services">1-on-1 Personal Training</a></li>
            <li><a href="#services">Online Coaching</a></li>
            <li><a href="#services">Nutrition &amp; Meal Plans</a></li>
            <li><a href="#services">Group Classes &amp; Bootcamp</a></li>
          </ul>
        </div>
        <div className="footer-contact" data-aos="fade-up" data-aos-delay="400">
          <h4>Contact</h4>
          <ul>
            <li>{contactDetails.email}</li>
            <li>{contactDetails.instagram}</li>
            <li>{contactDetails.twitter}</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Coach Alex. All rights reserved.</p>
        <p>Made with <FaHeart color="#00d4ff" size={11}/> by Tobias.dev</p>
      </div>
    </footer>
  )
}
