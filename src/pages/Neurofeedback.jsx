import { Link } from 'react-router-dom'
import './Neurofeedback.css'

const benefits = [
  'Trauma & PTSD symptoms',
  'Sleep disturbances',
  'Chronic pain',
  'Irritability & anger',
  'Cognitive difficulties',
  'Substance use recovery',
  'Emotional dysregulation',
  'Flashbacks',
]

export default function Neurofeedback() {
  return (
    <main className="nf-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Neurofeedback</h1>
          <p>Retraining the Brain for Recovery and Resilience</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="nf-intro">
            <div className="nf-intro-text">
              <h2>What Is Neurofeedback?</h2>
              <p>
                Neurofeedback, also known as EEG biofeedback, is a non-invasive, evidence-based method of training the brain to function more efficiently. Using real-time data from an electroencephalogram (EEG), this approach helps individuals regulate brain activity to reduce symptoms associated with trauma, such as sleep disturbances, chronic pain, irritability, anger, and cognitive difficulties.
              </p>
              <p>
                Neurofeedback can also support recovery from substance use challenges, including dependence on alcohol, tobacco, and other drugs. Through a series of targeted sessions, individuals learn to reinforce healthier brain patterns — often resulting in improved emotional regulation, mental clarity, and overall well-being.
              </p>
              <p>
                This approach is <strong>strength-based and performance-oriented</strong>, offering a structured, practical path to healing. Designed to align with the mindset of those who value training and resilience — such as service members and first responders — neurofeedback focuses on building capability, not labeling deficits.
              </p>
            </div>
            <div className="nf-highlight-box">
              <h3>You Don't Have to Just Live With It</h3>
              <p>If you are struggling with flashbacks, emotional outbursts, sleep issues, or chronic pain, know that there is help.</p>
              <p>These symptoms may be the result of brain dysregulation — and they are treatable.</p>
              <p className="nf-emphasis">With the right support, your brain can heal. Relief is possible — and within reach.</p>
              <Link to="/contact" className="btn-primary">Schedule a Consultation</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">What Neurofeedback Can Help With</h2>
          <div className="nf-benefits-grid">
            {benefits.map(b => (
              <div key={b} className="nf-benefit">
                <span className="nf-check">✓</span>
                <span>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="nf-how">
            <h2>How It Works</h2>
            <div className="nf-steps">
              <div className="nf-step">
                <div className="nf-step-num">1</div>
                <div>
                  <h3>Assessment</h3>
                  <p>Your provider reviews your symptoms and history to determine if neurofeedback is appropriate for your needs.</p>
                </div>
              </div>
              <div className="nf-step">
                <div className="nf-step-num">2</div>
                <div>
                  <h3>Brain Mapping (qEEG)</h3>
                  <p>Sensors are placed on your scalp to record brainwave activity. This creates a baseline map of how your brain is currently functioning.</p>
                </div>
              </div>
              <div className="nf-step">
                <div className="nf-step-num">3</div>
                <div>
                  <h3>Training Sessions</h3>
                  <p>During each session, you receive real-time feedback — typically through audio or visual cues — that gently guides your brain toward healthier patterns.</p>
                </div>
              </div>
              <div className="nf-step">
                <div className="nf-step-num">4</div>
                <div>
                  <h3>Progress & Results</h3>
                  <p>Most clients notice meaningful improvements within 10–20 sessions. Changes are gradual and cumulative, with lasting results.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="nf-specialist">
            <h2>Meet Our Neurofeedback Specialist</h2>
            <p>
              Deanna Smith is Wellbridge Mental Health's dedicated Neurofeedback Specialist. With a strength-based, performance-oriented approach, Deanna helps clients — including service members, first responders, and anyone seeking a structured path to healing — achieve lasting improvements in brain regulation and well-being.
            </p>
            <Link to="/team" className="btn-primary">Meet the Full Team</Link>
          </div>
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Interested in Neurofeedback?</h2>
          <p>Contact us to learn more or schedule a consultation with Deanna.</p>
          <Link to="/contact" className="btn-light">Get in Touch</Link>
        </div>
      </section>
    </main>
  )
}
