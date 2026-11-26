import {
  Palette,
  Video,
  Camera,
  Clapperboard,
  Mic,
  AudioLines,
  FileText,
  Code
} from 'lucide-react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import './Services.css'

function Services() {
  const services = [
    {
      number: '01',
      icon: Palette,
      title: 'Graphic Design',
      description:
        'Creative visual designs for brands, businesses, and individuals, including flyers, logos, banners, and social media designs.'
    },
    {
      number: '02',
      icon: Video,
      title: 'Video Editing',
      description:
        'Professional video editing that transforms raw footage into engaging and polished visual stories.'
    },
    {
      number: '03',
      icon: Camera,
      title: 'Photography',
      description:
        'Capturing meaningful moments, products, and creative visuals with attention to detail.'
    },
    {
      number: '04',
      icon: Clapperboard,
      title: 'Videography',
      description:
        'Creative video coverage and visual storytelling for events, brands, and special projects.'
    },
    {
      number: '05',
      icon: Mic,
      title: 'Voice-over Production',
      description:
        'Clear and engaging voice-over production for adverts, educational content, and digital media.'
    },
    {
      number: '06',
      icon: AudioLines,
      title: 'Audio Editing',
      description:
        'Audio cleaning, sound enhancement, and editing for quality and professional listening experiences.'
    },
    {
      number: '07',
      icon: FileText,
      title: 'WPS Production',
      description:
        'Document creation, formatting, presentations, and other office productivity services.'
    },
    {
      number: '08',
      icon: Code,
      title: 'Website & Android Development',
      description:
        'Building functional websites and Android applications to bring digital ideas to life.'
    }
  ]

  return (
    <>
      <Navbar />

      <main className="services-page">

        {/* Page Hero */}
        <section className="services-page-hero">
          <div className="container">
            <span className="section-label">
              WHAT WE DO
            </span>

            <h1>
              Our <span>Services.</span>
            </h1>

            <p>
              From creative design to digital development, we provide
              solutions that help ideas grow into something meaningful.
            </p>

            <div className="services-breadcrumb">
              <span>Home</span>
              <span>/</span>
              <span>Services</span>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="services-section section">
          <div className="container">

            <div className="services-heading">
              <div>
                <span className="section-label">WHAT WE DO</span>
                <h2 className="section-title">
                  Creative Services. <br />
                  Meaningful Solutions.
                </h2>
              </div>

              <p className="section-description">
                From creative design to digital development, we provide
                solutions that help ideas grow into something meaningful.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon

                return (
                  <div className="service-card" key={service.number}>
                    <div className="service-card-top">
                      <span className="service-number">
                        {service.number}
                      </span>

                      <div className="service-icon">
                        <Icon size={25} strokeWidth={1.6} />
                      </div>
                    </div>

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <span className="service-arrow">↗</span>
                  </div>
                )
              })}
            </div>

          </div>
        </section>

        <CallToAction />

      </main>

      <Footer />
    </>
  )
}

export default Services