import './Contact.css'

export default function Contact() {
  return (
    <main className="contact-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out by phone or stop by our office in Orem.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="info-card">
              <h3>Office Location</h3>
              <p>247 E 930 S<br />Orem, UT 84058</p>
              <a
                href="https://maps.google.com/?q=247+E+930+S+Orem+UT+84058"
                target="_blank"
                rel="noopener noreferrer"
                className="map-link"
              >
                Get Directions →
              </a>
            </div>

            <div className="info-card">
              <h3>Phone</h3>
              <a href="tel:3856666239" className="phone-link">(385) 666-6239</a>
              <p className="phone-note">Call or text to schedule a free 15-minute consultation.</p>
            </div>

            <div className="info-card">
              <h3>Session Options</h3>
              <ul>
                <li>In-person — Orem, UT</li>
                <li>Telehealth — Utah residents</li>
              </ul>
            </div>

            <div className="info-card">
              <h3>Free Consultation</h3>
              <p>We offer a free 15-minute phone consultation so you can find out if we're the right fit before committing.</p>
            </div>
          </div>

          <div className="map-wrap">
            <iframe
              title="Wellbridge Mental Health location"
              src="https://maps.google.com/maps?q=247+E+930+S+Orem+UT+84058&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
