import AboutUsContent from "../components/About-us/AboutUsContent"
import ContactFormAndLocation from "../components/ContactFormAndLocation"
import Footer from "../components/Footer"
import AreaOfExperties from "../components/Home/AreaOfExperties"
import FeaturedProjects from "../components/Home/FeaturedProjects"
import Hero from "../components/Home/Hero"
import OurWorks from "../components/Home/OurWorks"
import MapSection from "../components/MapSection"
import Navbar from "../components/Navbar"
import OurClients from "../components/OurClients"

const Home = () => {
  return (
    <div >
      <Hero />
      <AboutUsContent />
      <AreaOfExperties />
      <OurWorks />
      <OurClients />
      <FeaturedProjects />
      <ContactFormAndLocation />

      <MapSection />
    </div>
  )
}
export default Home