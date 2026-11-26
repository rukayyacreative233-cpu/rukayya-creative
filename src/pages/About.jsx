import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import CallToAction from '../components/CallToAction'
import rukayyaImg from '../images/rukayya.png'
import './About.css'

function About() {
  const values = [
    {
      number: '01',
      title: 'Creativity',
      description:
        'We turn ideas into original and meaningful creative solutions.'
    },
    {
      number: '02',
      title: 'Professionalism',
      description:
        'We approach every project with commitment, care, and quality.'
    },
    {
      number: '03',
      title: 'Innovation',
      description:
        'We embrace new ideas, tools, and technologies to create better experiences.'
    },
    {
      number: '04',
      title: 'Integrity',
      description:
        'We believe in honesty, trust, and building lasting relationships.'
    },
    {
      number: '05',
      title: 'Excellence',
      description:
        'We continuously strive to deliver work that meets high standards.'
    }
  ]

  return (
    <>
      <Navbar />

      <main className="about-page">

        {/* Page Hero */}
        <section className="about-page-hero">
          <div className="container">
            <span className="section-label">
              GET TO KNOW US
            </span>

            <h1>
              About <span>Rukayya Creative.</span>
            </h1>

            <p>
              Creativity, technology, and media coming together
              to transform ideas into meaningful digital experiences.
            </p>

            <div className="about-breadcrumb">
              <span>Home</span>
              <span>/</span>
              <span>About Us</span>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="about-story section">
          <div className="container">
            <div className="about-story-grid">

              <div className="about-story-image">
                <img
                  src={rukayyaImg}
                  alt="Rukayya Haruna"
                />

                <div className="about-story-badge">
                  <span>RC.</span>
                  <p>Creativity meets technology</p>
                </div>
              </div>

              <div className="about-story-content">
                <span className="section-label">
                  OUR STORY
                </span>

                <h2 className="section-title">
                  Turning Ideas Into
                  <span> Creative Possibilities.</span>
                </h2>

                <div className="gold-line"></div>

                <p>
                  Rukayya Creative is a creative brand focused on
                  delivering digital design, media production,
                  and technology solutions.
                </p>

                <p>
                  Our journey is built on creativity, continuous
                  learning, and the belief that technology can
                  create opportunities for individuals, businesses,
                  and communities.
                </p>

                <p>
                  From graphic design and video production to
                  website and Android development, we bring
                  different creative and digital skills together
                  to turn ideas into reality.
                </p>

                <div className="about-founder">
                  <span className="founder-line"></span>
                  <div>
                    <h3>Rukayya Haruna</h3>
                    <p>Founder, Rukayya Creative</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="about-mission section">
          <div className="container">
            <div className="mission-grid">

              <div className="mission-card">
                <span className="mission-number">01 / MISSION</span>
                <h2>Our Mission</h2>
                <p>
                  To deliver creative, innovative, and accessible
                  digital solutions that empower individuals and
                  businesses to achieve their goals.
                </p>
              </div>

              <div className="mission-card vision-card">
                <span className="mission-number">02 / VISION</span>
                <h2>Our Vision</h2>
                <p>
                  To become a trusted creative brand known for
                  excellence in design, technology, and media,
                  while inspiring digital growth and creativity.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="about-values-section section">
          <div className="container">

            <div className="values-heading">
              <span className="section-label">
                WHAT GUIDES US
              </span>

              <h2 className="section-title">
                Our Core <span>Values.</span>
              </h2>

              <p className="section-description">
                The principles that guide our work, relationships,
                and commitment to delivering meaningful solutions.
              </p>
            </div>

            <div className="about-values-grid">
              {values.map((value) => (
                <div className="about-value-card" key={value.number}>
                  <span>{value.number}</span>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Brand Closing */}
        <CallToAction />

      </main>

      <Footer />
    </>
  )
}

export default About