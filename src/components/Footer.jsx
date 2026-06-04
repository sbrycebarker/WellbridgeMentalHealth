import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Wellbridge Mental Health</span>
          <p>Compassionate, evidence-based care for individuals, couples, and families in Orem, Utah.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/team">Our Team</Link></li>
            <li><Link to="/insurance">Insurance</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>247 E 930 S<br />Orem, UT 84058</p>
          <p><a href="tel:3856666239">(385) 666-6239</a></p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Wellbridge Mental Health. All rights reserved.</p>
      </div>
    </footer>
  )
}
