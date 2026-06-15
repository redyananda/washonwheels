import "./Testimonials.css";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Testimonials = () => {
  return (
    <div className="testimonial">
      <h2>What They Say</h2>
      <div className="testimonial-container">
        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./1.webp"
                    alt="testi-sara"
                  />
                  <h3 className="testimonial-name">Sara Warner</h3>
                  <span className="testimonial-role">Project Manager</span>
                  <p className="testimonial-text">
                    Delivered both frontend and backend on a tight deadline
                    without missing a beat. Clean code, clear communication, and
                    he actually understood the product, not just the tickets.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./2.webp"
                    alt="testi-cristopher"
                  />
                  <h3 className="testimonial-name">Cristopher W</h3>
                  <span className="testimonial-role">Startup Founder</span>
                  <p className="testimonial-text">
                    Took our rough idea to a working full-stack app faster than
                    I expected. Reliable, proactive, and flags problems before
                    they become problems. Would hire again.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./3.webp"
                    alt="testi-peter"
                  />
                  <h3 className="testimonial-name">Peter Andres</h3>
                  <span className="testimonial-role">Engineering Lead</span>
                  <p className="testimonial-text">
                    One of the few devs comfortable across the whole stack. His
                    APIs are well structured and his React components are easy
                    to maintain. A genuine pleasure to review his PRs.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./4.webp"
                    alt="testi-kim"
                  />
                  <h3 className="testimonial-name">Kim Yvonne</h3>
                  <span className="testimonial-role">Product Designer</span>
                  <p className="testimonial-text">
                    He translated my designs into pixel-perfect UI and even
                    caught edge cases I had missed. Rare to find a developer who
                    cares this much about both code and the user experience.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./5.webp"
                    alt="testi-johanna"
                  />
                  <h3 className="testimonial-name">Johanna Lang</h3>
                  <span className="testimonial-role">CTO</span>
                  <p className="testimonial-text">
                    Brought real ownership to our backend architecture. Scalable
                    database design, solid auth, and clean deployments. I trust
                    him with the parts that matter most.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./6.webp"
                    alt="testi-lareine"
                  />
                  <h3 className="testimonial-name">Lareine Teto</h3>
                  <span className="testimonial-role">Freelance Client</span>
                  <p className="testimonial-text">
                    Hired him for a quick MVP and got something far more
                    polished than I asked for. Honest about timelines,
                    responsive throughout, and delivered exactly what we needed.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./7.webp"
                    alt="testi-sofia"
                  />
                  <h3 className="testimonial-name">Sofia Jannah</h3>
                  <span className="testimonial-role">Marketing Lead</span>
                  <p className="testimonial-text">
                    He built our landing page and dashboard from scratch, fast
                    and bug-free. Easy to work with even when I kept changing my
                    mind on the requirements.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
