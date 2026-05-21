import React from 'react'
import { FaCheckCircle, FaAppleAlt, FaUsers, FaTrophy } from 'react-icons/fa'

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image" data-aos="fade-right" data-aos-delay="100">
          <img
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=85"
            alt="Coach Alex"
          />
        </div>
        <div className="about-content" data-aos="fade-left" data-aos-delay="200">
          <p className="about-tag">About Coach Alex</p>
          <h2>I've Been Where <span>You Are</span></h2>
          <p>I was once an overworked professional with no time, no energy, and no results. After years of trial and error, I discovered a system that works — even with a packed schedule.</p>
          <p>Now I help busy professionals just like you transform their bodies in 30 days using personalized workout plans and nutrition guidance.</p>
          <div className="about-points">
            <div className="point" data-aos="fade-up" data-aos-delay="300">
              <FaCheckCircle color="#00d4ff" size={15}/> Certified Personal Trainer
            </div>
            <div className="point" data-aos="fade-up" data-aos-delay="400">
              <FaAppleAlt color="#00d4ff" size={15}/> Nutrition Coach
            </div>
            <div className="point" data-aos="fade-up" data-aos-delay="500">
              <FaUsers color="#00d4ff" size={15}/> 500+ Clients Transformed
            </div>
            <div className="point" data-aos="fade-up" data-aos-delay="600">
              <FaTrophy color="#00d4ff" size={15}/> 7 Years Experience
            </div>
          </div>
          <a href="#contact" className="btn-primary" data-aos="fade-up" data-aos-delay="700">
            Work With Me
          </a>
        </div>
      </div>
    </section>
  )
}
