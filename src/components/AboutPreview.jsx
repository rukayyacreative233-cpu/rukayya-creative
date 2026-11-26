import './AboutPreview.css'
import rukayyaImg from '../images/rukayya.png'

function AboutPreview() {
  return (
    <section className="about-preview">
      <div className="about-container">

        <div className="about-image-wrapper">
          <div className="about-image">
            <img src={rukayyaImg} alt="Rukayya Haruna" />
          </div>

          <div className="about-name-badge">
            <h3>Rukayya Haruna</h3>
            <p>Founder, Rukayya Creative</p>
          </div>
        </div>

        <div className="about-content">
          <p className="about-label">ABOUT RUKAYYA CREATIVE</p>
          <h2>Turning Creative Ideas Into Digital Impact.</h2>
          <p>
            Rukayya Creative is a creative brand focused on providing digital design,
            media production, and technology solutions. We turn ideas into creative
            products that inspire, engage, and deliver real value.
          </p>
          <p>
            We help individuals, businesses, and organizations build their brands, grow
            their online presence, and bring their ideas to life through creativity and technology.
          </p>

          <div className="about-mission-vision">
            <div>
              <h3>Our Mission</h3>
              <p>To deliver creative, innovative, and accessible digital solutions that empower individuals and businesses to achieve their goals.</p>
            </div>
            <div>
              <h3>Our Vision</h3>
              <p>To become a trusted creative brand known for excellence in design, technology, and media, while inspiring digital growth and creativity.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AboutPreview