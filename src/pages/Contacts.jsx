import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, MessageCircle, BookOpen } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contacts.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Website & Android Development',
    subject: '',
    message: ''
  })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Main WhatsApp number - for form, WhatsApp and calls
    const whatsappNumber = '2349075395671'
    const text = `Hello Rukayya Creative!\n\nMy Name: ${formData.name}\nMy Email: ${formData.email}\nService Needed: ${formData.service}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
    window.open(url, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <>
      <Navbar />
      <main className="contact-page">
        <section className="contact-page-hero">
          <div className="container">
            <span className="section-label">GET IN TOUCH</span>
            <h1>Contact <span>Us.</span></h1>
            <p>Have a project in mind? Let us turn your idea into something creative and meaningful.</p>
            <div className="contact-breadcrumb">
              <span>Home</span><span>/</span><span>Contact</span>
            </div>
          </div>
        </section>

        <section className="contact-section section">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <span className="section-label">CONTACT INFO</span>
                <h2 className="section-title">Let Us Work Together.</h2>
                <p className="section-description">Reach out for design, media, or technology solutions. We will get back to you as soon as possible.</p>

                <a href="https://mail.google.com/mail/?view=cm&to=rukayyacreative233@gmail.com rukayyacreative233@gmail.com" className="contact-info-item">
                  <div className="contact-info-icon"><Mail size={20} /></div>
                  <div><h4>Email</h4><p> rukayyacreative233@gmail.com</p></div>
                </a>

                <a href="https://wa.me/2349075395671" target="_blank" rel="noreferrer" className="contact-info-item">
                  <div className="contact-info-icon whatsapp-icon"><MessageCircle size={20} /></div>
                  <div><h4>WhatsApp</h4><p>+234 907 539 5671</p></div>
                </a>

                <a href="tel:+2349075395671" className="contact-info-item">
                  <div className="contact-info-icon"><Phone size={20} /></div>
                  <div><h4>Phone / Call</h4><p>+234 907 539 5671</p></div>
                </a>

                <a href="https://wa.me/2348093986439" target="_blank" rel="noreferrer" className="contact-info-item">
                  <div className="contact-info-icon catalogue-icon"><BookOpen size={20} /></div>
                  <div><h4>WhatsApp Catalogue</h4><p>+234 809 398 6439</p><span className="item-sub">View our catalogue</span></div>
                </a>

                <div className="contact-info-item">
                  <div className="contact-info-icon"><MapPin size={20} /></div>
                  <div><h4>Location</h4><p>Kano, Nigeria</p></div>
                </div>

                <div className="contact-availability">
                  <span className="dot"></span> Available for new projects
                </div>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                {sent && (
                  <div className="success-msg">
                    <CheckCircle size={18} /> Opening WhatsApp... Your message is ready to send!
                  </div>
                )}
                <div className="form-row">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                </div>

                <select name="service" value={formData.service} onChange={handleChange} className="contact-select">
                  <option>Website & Android Development</option>
                  <option>Graphic Design</option>
                  <option>Video Editing</option>
                  <option>Photography</option>
                  <option>Videography</option>
                  <option>Voice-over Production</option>
                  <option>Audio Editing</option>
                  <option>WPS Production</option>
                </select>

                <input type="text" name="subject" placeholder="Subject - e.g. I need a website for my school" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" placeholder="Your Message - Tell us about your project..." rows="5" value={formData.message} onChange={handleChange} required />

                <button type="submit" className="contact-btn">
                  Send Message on WhatsApp <Send size={16} />
                </button>
                <p className="form-note">Your message will open in WhatsApp - just press Send there.</p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contact