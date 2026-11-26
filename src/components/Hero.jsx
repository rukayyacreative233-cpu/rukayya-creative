import './Hero.css'
import heroImg from '../images/hero.jpeg'

function Hero() {
  return (
    <section className="hero">
      {/* Background picture- Full Width */}
      <img src={heroImg} alt="Rukayya Creative studio" className="hero-bg" />
      
      {/* Purple Overlay / Shadow */}
      <div className="hero-overlay"></div>

      <div className="hero-container">
        <div className="hero-content">

          <h1>
            Creative Ideas.
            <span>Digital Excellence.</span>
          </h1>

          <p className="hero-description">
            We transform ideas into meaningful digital
            experiences through creative design,
            technology, and media solutions.
          </p>

          <div className="hero-buttons">
            <a href="/services" className="hero-btn primary-btn">
              Explore Our Services <span>↗</span>
            </a>

            <a href="/projects" className="hero-btn secondary-btn">
              View Our Projects
            </a>
          </div>

          <div className="hero-note">
            <span className="gold-line"></span>
            <p>Creativity meets technology.</p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero