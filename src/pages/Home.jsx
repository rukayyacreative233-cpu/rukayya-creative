import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutPreview from '../components/AboutPreview'
import WhyChooseUs from '../components/WhyChooseUs'
import Statistics from '../components/Statistics'
import FeaturedProjects from '../components/FeaturedProjects'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutPreview />
      <WhyChooseUs />
      <Statistics />
      <FeaturedProjects />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}

export default Home