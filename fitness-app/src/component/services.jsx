import { Link } from 'react-router-dom'

export default function Services({ data }) {
  return (
    <section className="srv-section" id="services">
      <p className="srv-label" data-aos="fade-up">What I offer</p>
      <h2 className="srv-heading" data-aos="fade-up" data-aos-delay="100">Programs Built<br />to Transform</h2>
      <p className="srv-sub" data-aos="fade-up" data-aos-delay="200">
        Every service is tailored to your goals — no cookie-cutter plans, no shortcuts. Just real results.
      </p>
      <div className="srv-grid">
        {data.map((s, index) => (
          <div
            key={s.num}
            className="srv-card"
            data-aos="fade-up"
            data-aos-delay={index * 120}
          >
            <p className="srv-card-num">{s.num}</p>
            <div className="srv-card-icon">{s.icon}</div>
            <h3 className="srv-card-title">{s.title}</h3>
            <p className="srv-card-desc">{s.desc}</p>
            <ul className="srv-card-features">
              {s.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <Link to={`/services/${s.num}`} className="srv-card-cta">Learn more →</Link>
          </div>
        ))}
      </div>
      <div className="srv-bottom" data-aos="fade-up" data-aos-delay="600">
        <a href="#contact"><button className="srv-cta-btn">Start Your Journey</button></a>
      </div>
    </section>
  )
}
