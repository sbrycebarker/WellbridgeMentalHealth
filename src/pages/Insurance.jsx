import { Link } from 'react-router-dom'
import './Insurance.css'

const insurers = [
  { name: 'Aetna', type: 'Commercial' },
  { name: 'BlueCross BlueShield', type: 'Commercial' },
  { name: 'Cigna / Evernorth', type: 'Commercial' },
  { name: 'UnitedHealthcare', type: 'Commercial' },
  { name: 'SelectHealth', type: 'Utah-based' },
  { name: 'Deseret Mutual (DMBA)', type: 'Utah-based' },
  { name: 'EMI Health', type: 'Utah-based' },
  { name: 'PEHP (Public Employees)', type: 'Utah-based' },
  { name: 'Molina Healthcare', type: 'Medicaid/CHIP' },
  { name: 'University of Utah Health Plans', type: 'Utah-based' },
]

const paymentMethods = ['Cash', 'HSA / FSA', 'Visa', 'Mastercard', 'Discover', 'Venmo']

export default function Insurance() {
  return (
    <main className="insurance-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Insurance & Fees</h1>
          <p>We accept most major insurance plans so cost doesn't stand between you and care.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Accepted Insurance Plans</h2>
          <p className="section-subtitle">We are in-network with the following providers. Coverage may vary — contact us or your insurer to verify your specific benefits.</p>

          <div className="insurers-grid">
            {insurers.map(ins => (
              <div key={ins.name} className="insurer-card">
                <span className="insurer-name">{ins.name}</span>
                <span className={`insurer-badge ${ins.type === 'Medicaid/CHIP' ? 'badge-medicaid' : ins.type === 'Utah-based' ? 'badge-utah' : 'badge-commercial'}`}>
                  {ins.type}
                </span>
              </div>
            ))}
          </div>

          <div className="insurance-note">
            <strong>Don't see your plan?</strong> Call us at <a href="tel:3856666239">(385) 666-6239</a> — we may still be able to work with your insurance or discuss self-pay options.
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="fees-grid">
            <div className="fees-card">
              <h2>Self-Pay & Out-of-Pocket</h2>
              <p>We offer self-pay rates for clients without insurance or whose plan we don't accept. Contact us directly for current session fees.</p>
              <ul className="fees-list">
                <li>Free 15-minute initial consultation</li>
                <li>Sliding scale options may be available</li>
                <li>Good Faith Estimate provided upon request (as required by law)</li>
              </ul>
            </div>
            <div className="fees-card">
              <h2>Payment Methods</h2>
              <p>For your convenience, we accept a variety of payment methods:</p>
              <div className="payment-chips">
                {paymentMethods.map(m => (
                  <span key={m} className="payment-chip">{m}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="verify-box">
            <h2>How to Verify Your Benefits</h2>
            <ol className="verify-steps">
              <li>Call the Member Services number on the back of your insurance card.</li>
              <li>Ask if Wellbridge Mental Health or your provider is in-network for outpatient mental health services.</li>
              <li>Ask about your deductible, copay, and any session limits.</li>
              <li>Contact us with any questions — we're happy to help you navigate your coverage.</li>
            </ol>
            <Link to="/contact" className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
