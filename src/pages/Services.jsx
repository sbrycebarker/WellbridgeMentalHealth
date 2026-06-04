import office from '../assets/images/office.jpeg'
import office2 from '../assets/images/office-2.jpeg'
import './Services.css'

const therapyApproaches = [
  'Cognitive Behavioral Therapy (CBT)',
  'Dialectical Behavior Therapy (DBT)',
  'EMDR',
  'Accelerated Resolution Therapy (ART)',
  'Attachment-Based Therapy',
  'Emotionally Focused Therapy',
  'Art Therapy',
  'Neurofeedback',
  'Family & Marital Therapy',
  'Trauma-Focused Therapy',
  'Relational Therapy',
]

const issues = [
  { label: 'Trauma & PTSD', desc: 'Processing past trauma using evidence-based approaches including EMDR and ART.' },
  { label: 'Anxiety', desc: 'Managing worry, panic, and stress with proven therapeutic techniques.' },
  { label: 'Depression', desc: 'Building tools to improve mood, motivation, and overall quality of life.' },
  { label: 'ADHD', desc: 'Strategies for focus, organization, and executive functioning.' },
  { label: 'Grief & Loss', desc: 'Support through the loss of a loved one, relationship, or major life change.' },
  { label: 'Relationship Issues', desc: 'Improving communication and connection in couples and families.' },
  { label: 'Anger Management', desc: 'Understanding triggers and developing healthy emotional responses.' },
  { label: 'Self Esteem', desc: 'Building a healthier relationship with yourself and your sense of worth.' },
  { label: 'Parenting', desc: 'Navigating the challenges of parenthood and strengthening family bonds.' },
  { label: 'Autism Spectrum', desc: 'Supportive therapy for individuals and families navigating ASD.' },
  { label: 'Coping Skills', desc: 'Developing tools to handle stress, change, and difficult emotions.' },
  { label: 'Child Issues', desc: 'Behavioral and emotional support for children ages 6 and up.' },
]

export default function Services() {
  return (
    <main className="services-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Our Services</h1>
          <p>Comprehensive mental health care — therapy, psychiatry, and medication management all in one place.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="service-block">
            <div className="service-text">
              <span className="service-tag">Therapy</span>
              <h2>Individual, Couples & Family Therapy</h2>
              <p>
                Our licensed therapists provide evidence-based talk therapy tailored to your unique situation. Whether you're working through past trauma, navigating relationship challenges, or simply feeling stuck — we're here to help.
              </p>
              <p>We work with individuals of all ages (6+), couples, and families, both in-person and via telehealth.</p>
              <ul className="service-details">
                <li>Free 15-minute initial consultation</li>
                <li>In-person & telehealth sessions available</li>
                <li>Ages 6 and up</li>
                <li>Individuals, couples, and families</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={office} alt="Therapy office at Wellbridge Mental Health" />
            </div>
          </div>

          <div className="service-block reverse">
            <div className="service-text">
              <span className="service-tag">Psychiatry</span>
              <h2>Psychiatric Medication Management</h2>
              <p>
                Our psychiatric nurse practitioner provides comprehensive psychiatric evaluations and ongoing medication management for a wide range of mental health conditions.
              </p>
              <p>
                Having both therapy and psychiatry under one roof means your care team can collaborate directly — leading to better, more coordinated outcomes.
              </p>
              <ul className="service-details">
                <li>Psychiatric evaluations</li>
                <li>Medication management & monitoring</li>
                <li>Coordination with your therapist</li>
                <li>Telehealth available</li>
              </ul>
            </div>
            <div className="service-image">
              <img src={office2} alt="Office at Wellbridge Mental Health" />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <h2 className="section-title">Therapy Approaches We Use</h2>
          <div className="approaches-grid">
            {therapyApproaches.map(a => (
              <div key={a} className="approach-chip">{a}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title">Issues We Treat</h2>
          <div className="issues-grid">
            {issues.map(issue => (
              <div key={issue.label} className="issue-card">
                <h3>{issue.label}</h3>
                <p>{issue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
