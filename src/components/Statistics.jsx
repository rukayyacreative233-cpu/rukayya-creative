
import './Statistics.css'

function Statistics() {
  const stats = [
    {
      number: '04',
      label: 'Featured Projects',
    },
    {
      number: '08',
      label: 'Creative Services',
    },
    {
      number: '03+',
      label: 'Core Technologies',
    },
    {
      number: '01',
      label: 'Creative Brand',
    },
  ]

  return (
    <section className="statistics-section">
      <div className="container">
        <div className="statistics-grid">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <h2>{stat.number}</h2>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Statistics
