import '../reusable-blocks.style.css';
import app1 from '../../assets/img/app/app-screen-1.png';
import app2 from '../../assets/img/app/app-screen-2.png';
import app3 from '../../assets/img/app/app-screen-3.png';

const HowItWorks = () => {
  return (
    <section className="section-how">
      <div className="container">
        <span className="subheading">How it works?</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="container">
        <div class="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">
            Tell us what you like (and what not):
          </h3>
          <p className="step-description">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div class="step-img-box">
          <img
            className="step-img"
            src={app1}
            alt="phone app preferences"
          ></img>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
