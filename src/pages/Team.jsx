import { Link } from 'react-router-dom'
import donny from '../assets/images/donny-smith.jpeg'
import jamis from '../assets/images/jamis-leeper.jpg'
import './Team.css'

const team = [
  {
    name: 'Donny Smith',
    credentials: 'LCSW',
    title: 'Licensed Clinical Social Worker',
    photo: donny,
    bio: [
      'Donny Smith is a Licensed Clinical Social Worker with a passion for helping individuals, couples, and families heal from trauma, manage anxiety, and build healthier relationships.',
      'He specializes in trauma and PTSD, self-esteem, and anxiety, using a wide range of evidence-based approaches including EMDR, CBT, DBT, and Accelerated Resolution Therapy (ART).',
      'Donny works with clients of all ages — from children as young as 6 through seniors — in both individual and family settings. He is available for in-person sessions in Orem and via telehealth.',
    ],
    specialties: ['Trauma & PTSD', 'Anxiety', 'Self Esteem', 'Depression', 'ADHD', 'Grief', 'Anger Management', 'Autism'],
    approaches: ['EMDR', 'CBT', 'DBT', 'ART', 'Neurofeedback', 'Emotionally Focused', 'Art Therapy'],
    psychologyToday: 'https://www.psychologytoday.com/us/therapists/donny-smith-orem-ut/1072894',
  },
  {
    name: 'Jamis Leeper',
    credentials: 'DNP, PMHNP-BC',
    title: 'Psychiatric Mental Health Nurse Practitioner',
    photo: jamis,
    bio: [
      'Jamis Leeper is a board-certified Psychiatric Mental Health Nurse Practitioner with a Doctorate of Nursing Practice from the University of Utah.',
      'Jamis specializes in psychiatric evaluations and ongoing medication management, helping clients achieve stability and wellness through carefully tailored treatment plans.',
      'With extensive experience in mental health stabilization and adolescent care, Jamis brings a compassionate, patient-centered approach to psychiatric services.',
    ],
    specialties: ['Psychiatric Evaluations', 'Medication Management', 'Anxiety', 'Depression', 'ADHD', 'Trauma', 'Mood Disorders'],
    approaches: ['Psychiatric Evaluation', 'Medication Management', 'Collaborative Care'],
    psychologyToday: null,
  },
]

export default function Team() {
  return (
    <main className="team-page">
      <section className="page-hero">
        <div className="page-hero-content">
          <h1>Meet Our Team</h1>
          <p>Experienced, compassionate clinicians committed to your well-being.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {team.map((member, i) => (
            <div key={member.name} className={`team-block ${i % 2 !== 0 ? 'reverse' : ''}`}>
              <div className="team-photo-wrap">
                <img src={member.photo} alt={member.name} className="team-photo" />
                <div className="team-name-card">
                  <h2>{member.name}</h2>
                  <span className="team-credentials">{member.credentials}</span>
                  <p className="team-title">{member.title}</p>
                  {member.psychologyToday && (
                    <a href={member.psychologyToday} target="_blank" rel="noopener noreferrer" className="pt-link">
                      View Psychology Today Profile →
                    </a>
                  )}
                </div>
              </div>
              <div className="team-info">
                {member.bio.map((para, j) => (
                  <p key={j}>{para}</p>
                ))}
                <div className="team-tags-section">
                  <h4>Specialties</h4>
                  <div className="tag-list">
                    {member.specialties.map(s => (
                      <span key={s} className="tag">{s}</span>
                    ))}
                  </div>
                </div>
                <div className="team-tags-section">
                  <h4>Approaches</h4>
                  <div className="tag-list">
                    {member.approaches.map(a => (
                      <span key={a} className="tag tag-outline">{a}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="container">
          <h2>Ready to Meet Your Provider?</h2>
          <p>Contact us to schedule a free 15-minute consultation.</p>
          <Link to="/contact" className="btn-light">Get in Touch</Link>
        </div>
      </section>
    </main>
  )
}
