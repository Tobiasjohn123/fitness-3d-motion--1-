import React from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials({ testimonials }) {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <p className="section-tag" data-aos="fade-up">Client Results</p>
        <h2 data-aos="fade-up" data-aos-delay="100">Real People. <span>Real Results.</span></h2>
        <div className="testimonials-grid">
          {testimonials.map((t, index) => (
            <div
              className="testimonial-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <FaQuoteLeft color="#00d4ff" size={22} className="quote-icon"/>
              <div className="stars">
                {[...Array(t.stars)].map((_, i) => (
                  <FaStar key={i} color="#00d4ff" size={15}/>
                ))}
              </div>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="author-avatar">{t.name.charAt(0)}</div>
                <div className="author-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
