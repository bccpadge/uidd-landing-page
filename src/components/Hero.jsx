import { HeroContent } from "../constants";
export const Hero = () => {
  return (
    <section className="hero wrapper" aria-labelledby="hero-title">
      <div className="hero-content">
        <h2 className="hero-title" id="hero-title" >{HeroContent.title}</h2>
        <p className="hero-description">{HeroContent.description}</p>
        <a href="#" className=" button btn-hero">{HeroContent.button}</a>
      </div>
    </section>
  )
}