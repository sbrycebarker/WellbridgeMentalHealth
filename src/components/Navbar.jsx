import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="logo-well">Well</span><span className="logo-bridge">bridge</span>
        <span className="logo-sub">Mental Health</span>
      </Link>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span /><span /><span />
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><NavLink to="/" onClick={() => setMenuOpen(false)}>Home</NavLink></li>
        <li><NavLink to="/services" onClick={() => setMenuOpen(false)}>Services</NavLink></li>
        <li><NavLink to="/neurofeedback" onClick={() => setMenuOpen(false)}>Neurofeedback</NavLink></li>
        <li><NavLink to="/team" onClick={() => setMenuOpen(false)}>Our Team</NavLink></li>
        <li><NavLink to="/insurance" onClick={() => setMenuOpen(false)}>Insurance</NavLink></li>
        <li><NavLink to="/faq" onClick={() => setMenuOpen(false)}>FAQ</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setMenuOpen(false)} className="nav-cta">Contact Us</NavLink></li>
      </ul>
    </nav>
  )
}
