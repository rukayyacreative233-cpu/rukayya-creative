import { ArrowUpRight } from 'lucide-react'
import './FeaturedProjects.css'
import nexaImg from '../images/nexa.jpeg'
import novaImg from '../images/nova.jpeg'
import tech4youthImg from '../images/tech4youth.jpeg'
import studentCardImg from '../images/student-card.jpeg'

function FeaturedProjects() {
  const projects = [
    {
      
      title: 'Tech4Youth Learning Platform',
      category: 'Web Development',
      technology: 'React.js',
      description:
        'A learning platform developed to provide students with access to learning resources and educational content.',
      link: 'https://tech4youth-capstone-frontend.vercel.app',
      image: tech4youthImg,
      featured: true,
    },
    {
      
      title: 'Nova Website Design',
      category: 'Web Design',
      technology: 'HTML & CSS',
      description:
        'A modern website interface created with a clean layout and responsive design.',
      link: 'https://nova-website-design.onrender.com',
      image: novaImg,
    },
    {
      
      title: 'Students Card Generator',
      category: 'Web Application',
      technology: 'HTML, CSS & JavaScript',
      description:
        'A web application that allows users to create student identification cards, upload photos, and download generated cards.',
      link: 'https://students-card-generator.onrender.com',
      image: studentCardImg,
    },
    {
      
      title: 'Nexa Digital',
      category: 'Web Development',
      technology: 'React.js',
      description:
        'A modern digital business website built with React, focusing on a professional user experience.',
      link: 'https://nexa-digital-m4uc.onrender.com',
      image: nexaImg,
    },
  ]

  return (
    <section className="featured-section section">
      <div className="container">
        <div className="featured-heading">
          <div>
            <span className="section-label">SELECTED WORKS</span>
            <h2 className="section-title">
              Ideas Into
              <br />
              <span>Digital Projects.</span>
            </h2>
          </div>

          <p className="section-description">
            A selection of digital projects showcasing our journey
            in creativity, technology, and web development.
          </p>
        </div>

        <div className="featured-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${project.featured ? 'featured-card' : ''}`}
              key={project.number}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <span className="project-number">
                  {project.number}
                </span>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span>{project.technology}</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  View Project <ArrowUpRight size={18} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects