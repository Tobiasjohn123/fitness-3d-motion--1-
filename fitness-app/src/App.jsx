import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AOS from 'aos'
import Navbar from './component/navbar.jsx'
import Hero from './component/hero.jsx'
import About from './component/about.jsx'
import Services from './component/services.jsx'
import Testimonials from './component/test.jsx'
import Servicedeets from './component/service-deets.jsx'
import Contact from './component/contact.jsx'
import Footer from './component/footer.jsx'
import { services, testimonials, stats, aboutPoints, contactDetails } from './component/data.jsx'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
    
    })
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <Hero stats={stats} />
            <About aboutPoints={aboutPoints} />
            <Services data={services} />
            <Testimonials testimonials={testimonials} />
            <Contact contactDetails={contactDetails}/>
            <Footer contactDetails={contactDetails} />
          </div>
        } />
        <Route path="/services/:id" element={<Servicedeets data={services} />} />
      </Routes>
    </BrowserRouter>
  )
}