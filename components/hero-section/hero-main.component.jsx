import Recomendation from './hero-recomendation.component';
import heroImg from '../../assets/img/hero.png';
import './hero.style.css';

const HeroSection = () => {
  return (
    <section className="section-hero">
      <div className="hero-container">
        <div className="hero-text-box">
          <h1 className="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="hero-description">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#" className="btn btn--full margin-right-sm">
            Start a healthy life!
          </a>
          <a href="#" className="btn btn--outline">
            Learn more &darr;
          </a>
          <Recomendation />
        </div>
        <div className="hero-img-box">
          <img
            src={heroImg}
            className="hero-img"
            alt="Woman eating food, meals in storage container and food bowls"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;