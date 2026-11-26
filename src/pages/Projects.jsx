import { ArrowUpRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Projects.css'
import nexaImg from '../images/nexa.jpeg'
import novaImg from '../images/nova.jpeg'
import tech4youthImg from '../images/tech4youth.jpeg'
import studentCardImg from '../images/student-card.jpeg'

function Projects() {
  const projects = [
    {
      title: 'Tech4Youth Learning Platform',
      category: 'Web Development',
      technology: 'React.js',
      description: 'A learning platform developed to provide students with access to learning resources and educational content.',
      link: 'https://tech4youth-capstone-frontend.vercel.app',
      image: tech4youthImg,
    },
    {
      title: 'Nova Website Design',
      category: 'Web Design',
      technology: 'HTML & CSS',
      description: 'A modern website interface created with a clean layout and responsive design.',
      link: 'https://nova-website-design.onrender.com',
      image: novaImg,
    },
    {
      title: 'Students Card Generator',
      category: 'Web Application',
      technology: 'HTML, CSS & JavaScript',
      description: 'A web application that allows users to create student identification cards, upload photos, and download generated cards.',
      link: 'https://students-card-generator.onrender.com',
      image: studentCardImg,
    },
    {
      title: 'Nexa Digital',
      category: 'Web Development',
      technology: 'React.js',
      description: 'A modern digital business website built with React, focusing on a professional user experience.',
      link: 'https://nexa-digital-m4uc.onrender.com',
      image: nexaImg,
    },
  ]

  return (
    <>
      <Navbar />
      <div className="projects-page">
        <div className="projects-header">
          <span className="projects-eyebrow">OUR WORK</span>
          <h1>Creative Work. <span>Real Impact.</span></h1>
          <p>A selection of live digital projects showcasing our journey in creativity, technology, and web development.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="live-badge">● LIVE</span>
              </div>
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.technology}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Live Project <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="projects-cta">
          <h2>Want a website like these?</h2>
          <p>Let's build yours next.</p>
          <a href="/contact" className="cta-btn">Let's Talk →</a>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Projects