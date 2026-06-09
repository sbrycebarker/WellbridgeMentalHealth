import { Link } from 'react-router-dom'
import buildingFront from '../assets/images/building-front.png'
import lobby from '../assets/images/lobby.jpeg'
import './Home.css'

const specialties = [
  {
    title: 'Depression',
    desc: 'Depression is a common and often overwhelming experience that can affect both emotional and physical well-being. We help clients navigate the challenges of depression while developing practical skills to foster emotional resilience and improve overall quality of life.',
  },
  {
    title: 'Anxiety',
    desc: 'Anxiety can impact both physical health and emotional well-being. Therapy helps individuals better understand their anxiety, develop effective coping strategies, and build a greater sense of calm, confidence, and resilience.',
  },
  {
    title: 'Trauma',
    desc: 'Trauma can leave lasting effects on how we feel, think, and relate to others. Our clinicians use evidence-based approaches including EMDR and Accelerated Resolution Therapy to help clients process and heal from traumatic experiences.',
  },
  {
    title: 'Neurofeedback',
    desc: 'Neurofeedback is a therapeutic technique that trains the brain to improve regulation and overall functioning. Through guided exercises, the brain learns new, more effective patterns — promoting better emotional, cognitive, and physical well-being.',
    link: '/neurofeedback',
  },
  {
    title: 'Attachment',
    desc: 'Attachment refers to the patterns we develop in connecting with others and seeking to have our core needs — safety, belonging, and self-worth — met within relationships. We specialize in attachment-based therapy for individuals, couples, and families.',
  },
  {
    title: 'Couples Therapy',
    desc: 'Relationships can be both deeply rewarding and incredibly challenging. We help couples strengthen communication, rebuild trust, and deepen emotional connection — whether facing conflict, disconnection, or major life transitions.',
  },
]

export default function Home() {
  return (
    <main>
      <section className="hero" style={{ backgroundImage: `url(${buildingFront})` }}>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Ready to Begin Your Next Chapter of Growth and Healing?</h1>
            <p>
              At Wellbridge Mental Health, we are committed to serving our community with compassionate, high-quality therapy for adults, teens, and children.
            </p>
            <div className="hero-btns">
              <Link to="/contact" className="btn-primary">Schedule an Appointment</Link>
              <Link to="/services" className="btn-secondary">Our Services</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="intro section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-text">
              <h2>Supporting Meaningful Change Through Connection and Care</h2>
              <p>
                At Wellbridge Mental Health, we are committed to providing high-quality, compassionate therapy for adults, teens, and children. Our team helps individuals and families build stronger, healthier relationships — both with themselves and with others.
              </p>
              <p>
                We specialize in attachment-focused individual, couples, and family therapy, offering a safe space for growth, healing, and lasting change.
              </p>
              <Link to="/contact" className="btn-primary">Take the First Step</Link>
            </div>
            <div className="intro-image">
              <img src={lobby} alt="Wellbridge Mental Health lobby" />
            </div>
          </div>
        </div>
      </section>

      <section className="overcome section bg-light">
        <div className="container overcome-grid">
          <div className="overcome-card">
            <h3>Take the First Step Toward Change</h3>
            <p>
              Life can feel overwhelming at times — leaving you exhausted, stuck, or uncertain about the future. At Wellbridge Mental Health, we're here to support you through life's challenges. Whether you're navigating stress, relationship difficulties, anxiety, or simply seeking greater clarity and balance, we'll walk alongside you as you rediscover your sense of purpose, strength, and self-worth.
            </p>
            <Link to="/contact" className="btn-primary">Schedule an Appointment</Link>
          </div>
          <div className="overcome-card">
            <h3>Begin Your Path to Healing</h3>
            <p>
              Your journey is unique, and so is your care. Every treatment plan at Wellbridge Mental Health is personalized to meet your specific needs. With a single, transparent rate for sessions, we integrate a variety of therapeutic approaches — giving you access to the tools and support needed for meaningful, lasting change.
            </p>
            <Link to="/services" className="btn-primary">Learn About Our Services</Link>
          </div>
        </div>
      </section>

      <section className="specialties section">
        <div className="container">
          <h2 className="section-title">Areas We Specialize In</h2>
          <div className="specialties-grid">
            {specialties.map(s => (
              <div key={s.title} className="specialty-card">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                {s.link && <Link to={s.link} className="learn-more">Learn more about Neurofeedback →</Link>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="location section bg-light">
        <div className="container">
          <div className="location-grid">
            <div>
              <h2>Conveniently Located in South Orem</h2>
              <p>Our office provides easy access for individuals and families across the Utah Valley area. We offer both in-person sessions and telehealth appointments for Utah residents.</p>
              <p><strong>247 E 930 S, Orem, UT 84058</strong></p>
              <a
                href="https://maps.google.com/?q=247+E+930+S+Orem+UT+84058"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Get Directions
              </a>
            </div>
            <div className="map-preview">
              <iframe
                title="Wellbridge Mental Health location"
                src="https://maps.google.com/maps?q=247+E+930+S+Orem+UT+84058&output=embed"
                width="100%"
                height="280"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Take the First Step?</h2>
          <p>Reach out today to schedule a free 15-minute consultation.</p>
          <Link to="/contact" className="btn-light">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
