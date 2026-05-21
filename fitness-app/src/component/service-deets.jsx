import { useParams, Link } from 'react-router-dom'
 

export default function Servicedeets({ data }) {
  const { id } = useParams()
  const service = data.find((s) => s.num === id)

  if (!service) {
    return (
      <div className="deets-notfound">
        <h1>Service not found</h1>
        <Link to="/">← Go back home</Link>
      </div>
    )
  }

  return (
    <div className="deets-page">

      {/* Back */}
      <Link to="/" className="deets-back">← Back to Home</Link>

      {/* Hero */}
      <div className="deets-hero">
        <span className="deets-num">{service.num}</span>
        <div className="deets-icon">{service.icon}</div>
        <h1 className="deets-title">{service.title}</h1>
        <p className="deets-desc">{service.desc}</p>

        {/* Stats bar */}
        <div className="deets-stats">
          <div className="deets-stat">
            <span className="deets-stat-value">50+</span>
            <span className="deets-stat-label">Clients Trained</span>
          </div>
          <div className="deets-stat-divider" />
          <div className="deets-stat">
            <span className="deets-stat-value">95%</span>
            <span className="deets-stat-label">Hit Their Goal</span>
          </div>
          <div className="deets-stat-divider" />
          <div className="deets-stat">
            <span className="deets-stat-value">4.9★</span>
            <span className="deets-stat-label">Average Rating</span>
          </div>
        </div>
      </div>

      {/* Meta */}
      <div className="deets-meta">
        <div className="deets-meta-item">
          <span className="deets-meta-label">💰 Price</span>
          <span className="deets-meta-value">{service.price}</span>
        </div>
        <div className="deets-meta-item">
          <span className="deets-meta-label">⏱ Duration</span>
          <span className="deets-meta-value">{service.duration}</span>
        </div>
        <div className="deets-meta-item">
          <span className="deets-meta-label">🎯 Best For</span>
          <span className="deets-meta-value">{service.forWho}</span>
        </div>
      </div>

      {/* Body */}
      <div className="deets-body">

        {/* What's included */}
        <div className="deets-block">
          <h2 className="deets-block-title">What's Included</h2>
          <ul className="deets-features-list">
            {service.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        {/* How it works */}
        <div className="deets-block">
          <h2 className="deets-block-title">How It Works</h2>
          <ol className="deets-steps">
            {service.howItWorks.map((step, i) => (
              <li key={i}>
                <span className="deets-step-num">{String(i + 1).padStart(2, '0')}</span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Testimonials */}
      <div className="deets-testimonials">
        <h2 className="deets-block-title">What Clients Say</h2>
        <div className="deets-testi-grid">
          {service.testimonials.map((t, i) => (
            <div key={i} className="deets-testi-card">
              <p className="deets-testi-quote">"{t.quote}"</p>
              <div className="deets-testi-author">
                <span className="deets-testi-avatar">{t.name[0]}</span>
                <div>
                  <p className="deets-testi-name">{t.name}</p>
                  <p className="deets-testi-result">{t.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="deets-cta">
        <p className="deets-cta-sub">Limited spots available</p>
        <h2 className="deets-cta-heading">Ready to Transform?</h2>
        <p className="deets-cta-text">Book a free 15-minute consultation — no commitment, no pressure.</p>
        <button className="deets-btn">Book Free Consultation</button>
        <p className="deets-cta-note">🔒 Free to book · No credit card required</p>
      </div>

    </div>
  )
}