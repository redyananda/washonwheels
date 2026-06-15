import Testimonials from "@/components/Testimonials"
import Hero from "../components/Hero"
import HowItWork from "../components/HowItWork"
import Navbar from "../components/Navbar"
import WhyWOW from "../components/WhyWOW"

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <HowItWork />
        <WhyWOW />
        <Testimonials />
    </div>
  )
}

export default Home