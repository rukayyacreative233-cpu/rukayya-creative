import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Navbar.css'
import logoImg from '../images/logo.jpeg'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Brand */}
       <Link to="/" className="nav-brand" onClick={closeMenu}>
  <img
    src={logoImg}
    alt="Rukayya Creative Logo"
    className="nav-logo"
  />

  <span className="brand-text">
    <span className="brand-name">Rukayya Creative</span>
    <span className="brand-tagline">
      Design. Development. Media.
    </span>
  </span>
</Link>

        {/* Navigation links */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
              onClick={closeMenu}
            >
              {link.name}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Let's Talk <span>↗</span>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className={`menu-toggle ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  )
}

export default Navbar