import { useState } from 'react'
import { Link } from 'react-router-dom'
import './FAQ.css'

const faqs = [
  {
    q: 'How much does therapy cost if you don\'t take my insurance?',
    a: 'Your introductory session costs $200. Every session after that is $140. We also provide a Good Faith Estimate upon request, as required by law.',
  },
  {
    q: 'Do you accept insurance?',
    a: 'Yes — we accept most major insurance plans including Aetna, BlueCross BlueShield, Cigna, SelectHealth, UnitedHealthcare, Molina, PEHP, Deseret Mutual, EMI Health, and University of Utah Health Plans. See our Insurance page for the full list.',
  },
  {
    q: 'What is a Good Faith Estimate?',
    a: 'Under the No Surprises Act, you have the right to receive a Good Faith Estimate of expected costs before beginning services. We are happy to provide one upon request.',
  },
  {
    q: 'Do you offer telehealth?',
    a: 'Yes. We offer secure telehealth sessions for Utah residents in addition to in-person appointments at our Orem office.',
  },
  {
    q: 'What ages do you work with?',
    a: 'We work with children ages 6 and up, adolescents, adults, couples, and families.',
  },
  {
    q: 'How do I get started?',
    a: 'The easiest way to get started is to call us at (385) 666-6239 or visit our Contact page. We offer a free 15-minute phone consultation so you can find out if we\'re the right fit before committing.',
  },
  {
    q: 'What is Neurofeedback and do I need a referral?',
    a: 'Neurofeedback is a non-invasive, evidence-based method of training the brain to function more efficiently using real-time EEG data. No referral is needed — contact us directly to learn if it\'s right for you.',
  },
  {
    q: 'How long are therapy sessions?',
    a: 'Standard sessions are typically 50 minutes. Your provider will discuss the recommended frequency and session length based on your individual needs.',
  },
  {
    q: 'Is what I share in therapy confidential?',
    a: 'Yes. What you share with your therapist is confidential with limited exceptions required by law, such as imminent risk of harm to yourself or others, or suspected child abuse. Your provider will review confidentiality with you at your first appointment.',
  },
]

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item ${open ? 'open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <span className="faq-icon">{open ? '−' : '+'}</span>
      </button>
      {open && <div className="faq-answer"><p>{a}</p></div>}
    </div>
  )
}

export default function FAQ() {
  return (
    <main>
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Frequently Asked Questions</h1>
          <p>Answers to common questions about our services, costs, and what to expect.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="faq-list">
            {faqs.map(item => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
          <div className="faq-cta">
            <p>Don't see your question answered here?</p>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
