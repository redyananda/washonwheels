import Results from "@/components/sections/home/Results"
import Hero from "../components/sections/home/Hero"
import HowItWork from "../components/sections/home/HowItWork"
import Navbar from "../components/Navbar"
import WhyWOW from "../components/sections/home/WhyWOW"
import Testimonials from "@/components/sections/home/Testimonials"
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