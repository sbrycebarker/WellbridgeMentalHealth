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
      'Donny Smith is a behavioral health clinician who works with children, adolescents, couples, and families to improve emotional regulation, communication, and relationship dynamics.',
      'He uses a blend of evidence-based practices — including EMDR, Accelerated Resolution Therapy, DBT, CBT, Solution-Focused Therapy, Internal Family Systems (IFS), Lifespan Integration (LI), Emotion-Focused Therapy, and Neurofeedback — along with creative, interactive approaches to help clients better understand their emotions and build practical skills for everyday life.',
      'A central focus of his work is helping clients build emotional awareness, increase flexibility in their thinking and behavior, and strengthen their ability to stay grounded when situations do not go as planned. He often works with families to improve connection, reduce conflict, and create more effective and supportive patterns of interaction.',
      'His approach is collaborative, practical, and tailored to each client\'s unique needs, with an emphasis on creating a safe environment where clients feel understood while also being gently challenged to grow.',
    ],
    specialties: ['Trauma & PTSD', 'Anxiety', 'Depression', 'Self Esteem', 'ADHD', 'Grief', 'Anger Management', 'Autism', 'Relationship Issues', 'Parenting'],
    approaches: ['EMDR', 'Accelerated Resolution Therapy', 'CBT', 'DBT', 'IFS', 'Solution-Focused Therapy', 'Lifespan Integration', 'Emotion-Focused Therapy', 'Neurofeedback'],
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
      'With extensive experience in mental health stabilization, Jamis brings a compassionate, patient-centered approach to psychiatric services — working collaboratively with therapists to provide coordinated, comprehensive care.',
    ],
    specialties: ['Psychiatric Evaluations', 'Medication Management', 'Anxiety', 'Depression', 'ADHD', 'Trauma', 'Mood Disorders'],
    approaches: ['Psychiatric Evaluation', 'Medication Management', 'Collaborative Care'],
    psychologyToday: null,
  },
  {
    name: 'Deanna Smith',
    credentials: 'Neurofeedback Specialist',
    title: 'Neurofeedback Specialist',
    photo: null,
    bio: [
      'Deanna Smith is a Neurofeedback Specialist at Wellbridge Mental Health, providing non-invasive, evidence-based brain training to help clients improve emotional regulation, reduce trauma symptoms, and achieve greater mental clarity.',
      'Neurofeedback uses real-time EEG data to help individuals train their brains toward healthier patterns of functioning — supporting recovery from trauma, sleep disturbances, chronic pain, substance use challenges, and more.',
      'Deanna\'s approach is strength-based and performance-oriented, making it particularly effective for service members, first responders, and anyone who values a structured, practical path to healing.',
    ],
    specialties: ['Trauma & PTSD', 'Sleep Disturbances', 'Chronic Pain', 'Substance Use', 'Emotional Dysregulation', 'Cognitive Difficulties'],
    approaches: ['Neurofeedback (EEG Biofeedback)', 'Brain Training', 'Strength-Based Approach'],
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
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="team-photo" />
                ) : (
                  <div className="team-photo-placeholder">
                    <span>{member.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                )}
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
