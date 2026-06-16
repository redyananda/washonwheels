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
    <div className="testimonials">
      <div className="testimonials-header">
        <h2>Testimonials</h2>
        <h1>Real words from real drivers</h1>
        <p>
          Hundreds of drivers swapped the weekend wash run for a few taps on
          their phone. Here's what they say.
        </p>
      </div>
      <div className="testimonials-content">
        <Carousel className="w-full sm:max-w-lg" opts={{ align: "start", loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./testi-1.webp"
                    alt="Michelle Tanuwijaya"
                  />
                  <h3 className="testimonial-name">Michelle Tanuwijaya</h3>
                  <span className="testimonial-role">
                    Kelapa Gading, Jakarta Utara
                  </span>
                  <p className="testimonial-text">
                    Booked them on a Sunday morning and they showed up right on
                    time at my apartment in Kelapa Gading. No more dragging my
                    car out into Jakarta traffic just to get it washed. Honestly
                    a game changer for my weekends.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./testi-2.webp"
                    alt="Felicia Wijaya"
                  />
                  <h3 className="testimonial-name">Felicia Wijaya</h3>
                  <span className="testimonial-role">PIK, Jakarta Utara</span>
                  <p className="testimonial-text">
                    The interior detailing blew me away. They got out coffee
                    stains I'd given up on, and the car smelled brand new
                    afterwards. Worth every rupiah, and the crew was super
                    careful with my leather seats.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./testi-3.webp"
                    alt="Rizky Pratama"
                  />
                  <h3 className="testimonial-name">Rizky Pratama</h3>
                  <span className="testimonial-role">
                    SCBD, Jakarta Selatan
                  </span>
                  <p className="testimonial-text">
                    Booking took less than a minute and they came straight to my
                    office parking in SCBD. I had my car detailed during a
                    meeting and walked out to it looking spotless. Couldn't ask
                    for an easier experience.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./testi-4.webp"
                    alt="Putri Anggraini"
                  />
                  <h3 className="testimonial-name">Putri Anggraini</h3>
                  <span className="testimonial-role">
                    Bintaro, Jakarta Selatan
                  </span>
                  <p className="testimonial-text">
                    The team was friendly, professional, and didn't waste a drop
                    of water. As a mom juggling a hundred things, having someone
                    come to my house in Bintaro and handle it all is a
                    lifesaver. I've already rebooked.
                  </p>
                </CardContent>
              </Card>
            </CarouselItem>

            <CarouselItem>
              <Card className="testimonial-card">
                <CardContent className="testimonial-card-content">
                  <img
                    className="testimonial-avatar"
                    src="./testi-5.webp"
                    alt="Dimas Saputra"
                  />
                  <h3 className="testimonial-name">Dimas Saputra</h3>
                  <span className="testimonial-role">
                    Kemang, Jakarta Selatan
                  </span>
                  <p className="testimonial-text">
                    I run errands all day, so my car always looks rough.
                    washonwheels comes to me and turns it around in under an
                    hour, no traffic, no waiting in line. The convenience alone
                    makes it a no-brainer.
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
