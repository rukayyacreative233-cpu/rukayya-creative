import { Quote } from 'lucide-react'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Yusuf',
      message:
        'Rukayya Creative demonstrated exceptional expertise and dedication in her work. I commend how she listens to her clients needs and works tirelessly to deliver the desired results. My trust in her work has made me hope for the opportunity to invite her to our state, to teach young women how to use their phones for graphic design and other digital skills they can easily learn.',
    },
    {
      name: 'Hadiza',
      message:
        'I truly appreciate how she listens to your needs and understands exactly what you want. Her work reflects care, expertise, and genuine dedication.',
    },
    {
      name: 'Khadija',
      message:
        'Rukayya Creative has a true gift for creativity and a deep understanding of what her clients need. She always strives to deliver excellent work that matches your vision.',
    },
    {
      name: 'Mustafa',
      message:
        'What I admire most about her is her dedication and how she goes the extra mile to ensure every project she handles meets the expected standard.',
    },
    {
      name: 'Hajara',
      message:
        'She is skilled, patient, and attentive in her work. It is wonderful to find someone who truly listens to your needs and works hard to give you exactly what you want.',
    },
  ]

  return (
    <section className="testimonials-section section">
      <div className="container">

        <div className="testimonials-heading">
          <span className="section-label">
            CLIENT EXPERIENCES
          </span>

          <h2 className="section-title">
            Trust Built Through
            <span> Creativity & Commitment.</span>
          </h2>

          <p className="section-description">
            Every project is an opportunity to build meaningful
            relationships, earn trust, and deliver quality work.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((person, index) => (
            <div
              className={`testimonial-card ${
                index === 0 ? 'featured-testimonial' : ''
              }`}
              key={person.name}
            >
              <Quote
                className="testimonial-quote"
                size={30}
              />

              <p className="testimonial-message">
                {person.message}
              </p>

              <div className="testimonial-person">
                <div className="testimonial-avatar">
                  {person.name.charAt(0)}
                </div>

                <div>
                  <h3>{person.name}</h3>
                  <span>Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Testimonials