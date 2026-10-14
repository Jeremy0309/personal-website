import Image from "next/image"
import { Gallery } from "@/components/gallery"
import { buttonVariants } from "@/components/ui/button"
import { photographer, services } from "@/lib/portfolio"

const Arrow = () => <span aria-hidden="true">↗</span>

export default function Page() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header shell">
        <a
          className="wordmark"
          href="#"
          aria-label={photographer.name + " home"}
        >
          {photographer.name}
          <span>PHOTOGRAPHY</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
          <a className="nav-contact" href="#contact">
            Let’s talk <Arrow />
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero shell" aria-labelledby="hero-title">
          <div className="hero-heading">
            <div>
              <p className="eyebrow">
                <span className="small-line" /> A STUDY IN LIGHT & LIFE
              </p>
              <h1 id="hero-title">
                A quieter way
                <br />
                of <em>seeing.</em>
              </h1>
            </div>
            <div className="hero-note">
              <p>
                People, places, and the moments
                <br className="desktop-break" /> in between. Photographs that
                <br className="desktop-break" /> feel like something.
              </p>
              <a className="text-link" href="#work">
                Explore selected work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <figure className="hero-photo">
            <Image
              src="/images/hero.jpg"
              alt="A quiet alpine lake reflecting mountains and a small lakeside cabin"
              fill
              sizes="(max-width: 1400px) 92vw, 1320px"
              preload
            />
            <figcaption>
              <span>THE ART OF PAYING ATTENTION</span>
              <span>01 — STILLNESS</span>
            </figcaption>
          </figure>
          <div className="hero-footnote">
            <span>Portraits · Landscapes · Editorial</span>
            <span>Slow down. Look a little closer.</span>
          </div>
        </section>
        <section
          className="work shell section-space"
          id="work"
          aria-labelledby="work-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / SELECTED WORK</p>
              <h2 id="work-title">
                Collected <em>moments.</em>
              </h2>
            </div>
            <p>
              A few things that made me stop
              <br />
              and reach for the camera.
            </p>
          </div>
          <Gallery />
          <p className="image-disclaimer">
            A visual starting point — all photographs shown are Unsplash
            placeholders.
          </p>
        </section>
        <section
          className="about-section section-space"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-grid shell">
            <figure className="about-photo">
              <Image
                src="/images/about.jpg"
                alt="Sample photographer portrait in soft natural light"
                fill
                sizes="(max-width: 700px) 90vw, 38vw"
              />
              <figcaption>ALEX MORGAN / BEHIND THE LENS</figcaption>
            </figure>
            <div className="about-copy">
              <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
              <h2 id="about-title">
                Drawn to the light.
                <br />
                <em>Here for the story.</em>
              </h2>
              <p>
                I’m Alex, a photographer with an eye for quiet details and a
                soft spot for the unscripted. I photograph people as they are,
                places as they feel, and the little things we might otherwise
                walk past.
              </p>
              <p>
                My approach is simple: make room, stay curious, and let the
                moment unfold. Whether we’re making a portrait or telling a
                brand’s story, I want the images to feel honest — and
                unmistakably yours.
              </p>
              <a className="text-link" href="#contact">
                Have a story in mind? <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section
          className="pricing shell section-space"
          id="pricing"
          aria-labelledby="pricing-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / WORKING TOGETHER</p>
              <h2 id="pricing-title">
                Something <em>worth keeping.</em>
              </h2>
            </div>
            <p>
              A little guidance to help you plan.
              <br />
              Every good project starts with a conversation.
            </p>
          </div>
          <div className="pricing-grid">
            {services.map((service, index) => (
              <article className="price-card" key={service.name}>
                <p className="eyebrow">
                  0{index + 1} / {service.category}
                </p>
                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <p className="price">
                  <span>From</span> {service.price}
                </p>
                <ul>
                  {service.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a
                  className={buttonVariants({
                    variant: "outline",
                    className: "service-link",
                  })}
                  href={
                    photographer.emailLink +
                    "?subject=" +
                    encodeURIComponent(service.name + " photography enquiry")
                  }
                >
                  Let’s plan a session <Arrow />
                </a>
              </article>
            ))}
          </div>
          <p className="pricing-note">
            Illustrative starting rates in USD, not a live offer. Final quotes
            depend on scope, location, travel, licensing, and any applicable
            taxes.
          </p>
        </section>
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="shell contact-inner">
            <p className="eyebrow">04 / SAY HELLO</p>
            <h2 id="contact-title">
              Let’s make
              <br />
              <em>something meaningful.</em>
            </h2>
            <p>
              A person, a place, an idea. I’d love to hear what you have in
              mind.
            </p>
            <a className="email-link" href={photographer.emailLink}>
              {photographer.email} <Arrow />
            </a>
            <p className="contact-hint">
              Tell me a little about your project, where, and when.
            </p>
          </div>
        </section>
      </main>
      <footer className="site-footer shell">
        <a className="footer-name" href="#">
          {photographer.name}
          <span>PHOTOGRAPHY</span>
        </a>
        <p>Demo portfolio · Sample identity, email & rates</p>
        <a className="text-link" href="#main">
          Back to top <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </>
  )
}
