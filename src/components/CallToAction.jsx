
import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import './CallToAction.css'

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">

          <span className="cta-label">
            LET'S CREATE SOMETHING GREAT
          </span>

          <h2>
            Have a Project
            <span> in Mind?</span>
          </h2>

          <p>
            Whether you need creative design, media production,
            or digital solutions, we are ready to bring your ideas
            to life. Let's work together to create something meaningful.
          </p>

          <div className="cta-buttons">
            <a
              href="https://wa.me/2349075395671"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-primary-btn"
            >
              <MessageCircle size={19} />
              Start a Conversation
              <ArrowUpRight size={18} />
            </a>

            <Link to="/contact" className="cta-secondary-btn">
              Contact Us
            </Link>
          </div>

          <div className="cta-bottom-note">
            <span></span>
            <p>Rukayya Creative — Design. Development. Media.</p>
          </div>

        </div>

        <div className="cta-decoration cta-decoration-one"></div>
        <div className="cta-decoration cta-decoration-two"></div>
      </div>
    </section>
  )
}

export default CallToAction
