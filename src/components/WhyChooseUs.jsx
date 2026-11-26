
import './WhyChooseUs.css'

function WhyChooseUs() {
  const reasons = [
    {
      number: '01',
      title: 'Creative Excellence',
      description:
        'We combine creativity and strategy to deliver meaningful and visually appealing results.',
    },
    {
      number: '02',
      title: 'Professional Quality',
      description:
        'Every project receives attention to detail, quality, and a professional approach.',
    },
    {
      number: '03',
      title: 'Multiple Services',
      description:
        'From graphic design to media production and web development, we offer diverse creative solutions.',
    },
    {
      number: '04',
      title: 'Client-Focused Approach',
      description:
        'We listen, understand your needs, and work towards bringing your ideas to life.',
    },
    {
      number: '05',
      title: 'Innovation',
      description:
        'We embrace new ideas and technology to create modern and effective digital experiences.',
    },
    {
      number: '06',
      title: 'Reliable Delivery',
      description:
        'We value your time and are committed to delivering projects with care and dedication.',
    },
  ]

  return (
    <section className="why-section section">
      <div className="container">
        <div className="why-heading">
          <span className="section-label">WHY WORK WITH US</span>

          <h2 className="section-title">
            More Than Creativity.
            <span> A Commitment to Excellence.</span>
          </h2>

          <p className="section-description">
            We bring together creative thinking, technical skills, and
            professional dedication to deliver solutions that make a difference.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason) => (
            <div className="why-item" key={reason.number}>
              <span className="why-number">{reason.number}</span>

              <div>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>

              <span className="why-arrow">↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
