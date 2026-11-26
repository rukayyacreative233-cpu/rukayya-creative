import {
  Send,
  MessageCircle,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail
} from 'lucide-react'

import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  const services = [
    'Graphic Design',
    'Video Editing',
    'Photography',
    'Videography',
    'Voice-over Production',
    'Website & Android Development'
  ]

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/19H88sQaGQ/'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/rukayyacreative233?igsh=YzljYTk1ODg3Zg=='
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/rukayya-haruna-b52411315?trk=contact-info'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@RukayyaCreative'
    },
    {
      name: 'Telegram',
      url: 'https://t.me/rukayyacreative233'
    }
  ]
  
  return (
    <footer className="footer">
      <div className="container">

        <div className="footer-main">

          {/* Brand Information */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              Rukayya <span>Creative.</span>
            </Link>

            <p className="footer-tagline">
              Design. Development. Media.
            </p>

            <p className="footer-description">
              We transform ideas into meaningful digital
              experiences through creative design, technology,
              and media solutions.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Our Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <ul>
              {services.map((service) => (
                <li key={service}>
                  <Link to="/services">{service}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column footer-contact">
            <h3>Get In Touch</h3>

            <div className="footer-contact-item">
              <Phone size={17} />
              <div>
                <a href="tel:+2349075395671">
                  +234 907 539 5671
                </a>
                <a href="tel:+2348093986439">
                  +234 809 398 6439
                </a>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={17} />
              <a
                href="https://mail.google.com/mail/?view=cm&to=rukayyacreative233@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                rukayyacreative233@gmail.com
              </a>
            </div>

            <div className="footer-contact-item">
              <MapPin size={17} />
              <span>Kano, Nigeria</span>
            </div>
            
            <a
            href="https://wa.me/2348093986439?text=Hello%20Rukayya%20Creative!%20I%20want%20to%20view%20your%20catalogue"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-whatsapp"
>
        <MessageCircle size={17} />
          View WhatsApp Catalogue
          <ArrowUpRight size={15} />
          </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Rukayya Creative.
            All rights reserved.
          </p>

          <p>
            <span>CREATIVE</span> Solutions professionals services you can trust.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer