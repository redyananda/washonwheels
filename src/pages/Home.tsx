import Results from "@/components/Results"
import Hero from "../components/Hero"
import HowItWork from "../components/HowItWork"
import Navbar from "../components/Navbar"
import WhyWOW from "../components/WhyWOW"
import Testimonials from "@/components/Testimonials"
import Footer from "@/components/Footer"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <HowItWork />
        <WhyWOW />
        <Results />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home