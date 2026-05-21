import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className="navbar" style={scrolled ? { background: 'rgba(2,2,2,0.92)', boxShadow: '0 8px 40px rgba(0,0,0,0.8)' } : {}}>
      <div className="nav-logo">
        <h1>Coach <span>Alex</span></h1>
      </div>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
        <li><a href="#services" onClick={() => setIsOpen(false)}>Services</a></li>
        <li><a href="#testimonials" onClick={() => setIsOpen(false)}>Testimonials</a></li>
        <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        <a href='#contact' className='nav-btn' onClick={() => setIsOpen(false)}>Start Today</a>
      </ul>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span style={isOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}}></span>
        <span style={isOpen ? { opacity: 0 } : {}}></span>
        <span style={isOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}}></span>
      </div>
    </nav>
  )
}
