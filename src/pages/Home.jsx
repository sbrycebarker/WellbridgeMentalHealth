import { Link } from 'react-router-dom'
import buildingFront from '../assets/images/building-front.png'
import lobby from '../assets/images/lobby.jpeg'
import './Home.css'

const issues = [
  'Anxiety', 'Trauma & PTSD', 'Depression', 'Relationship Issues',
  'ADHD', 'Grief', 'Self Esteem', 'Anger Management',
  'Parenting', 'Autism', 'Stress', 'Coping Skills',
]

export default function Home() {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `url(${buildingFront})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>You Don't Have to Face It Alone</h1>
            <p>Evidence-based therapy and psychiatric care for individuals, couples, and families in Orem, Utah.</p>
            <div className="hero-btns">
              <Link to="/contact" className="btn-primary">Request an Appointment</Link>
              <Link to="/services" className="btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Compassionate Care in Orem, Utah</h2>
              <p>
                At Wellbridge Mental Health, we believe that healing is possible for everyone. Our team of licensed clinicians provides a safe, supportive environment where you can work through life's challenges at your own pace.
              </p>
              <p>
                We offer both individual therapy and psychiatric medication management — so whether you need talk therapy, medication support, or both, we have you covered under one roof.
              </p>
              <Link to="/team" className="btn-primary">Meet Our Team</Link>
            </div>
            <div className="intro-image">
              <img src={lobby} alt="Wellbridge Mental Health lobby" />
            </div>
          </div>
        </div>
      </section>

      <section className="issues section bg-light">
        <div className="container">
          <h2 className="section-title">We Can Help With</h2>
          <div className="issues-grid">
            {issues.map(issue => (
              <div key={issue} className="issue-chip">{issue}</div>
            ))}
          </div>
          <div className="section-cta">
            <Link to="/services" className="btn-primary">View All Services</Link>
          </div>
        </div>
      </section>

      <section className="why section">
        <div className="container">
          <h2 className="section-title">Why Choose Wellbridge?</h2>
          <div className="why-grid">
            <div className="why-card">
              <div className="why-icon">🧠</div>
              <h3>Therapy + Psychiatry</h3>
              <p>One of the few practices in Utah County offering both licensed therapy and psychiatric medication management in one location.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">🤝</div>
              <h3>Most Insurance Accepted</h3>
              <p>We accept Aetna, BCBS, Cigna, SelectHealth, UnitedHealthcare, Molina, PEHP, Deseret Mutual, and more.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">💻</div>
              <h3>In-Person & Telehealth</h3>
              <p>Meet with your provider in our Orem office or from the comfort of your own home via secure video sessions.</p>
            </div>
            <div className="why-card">
              <div className="why-icon">👨‍👩‍👧</div>
              <h3>All Ages Welcome</h3>
              <p>We work with children (ages 6+), teens, adults, couples, families, and seniors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Take the First Step?</h2>
          <p>Reach out today to schedule a free 15-minute consultation.</p>
          <Link to="/contact" className="btn-light">Get in Touch</Link>
        </div>
      </section>
    </main>
  )
}
