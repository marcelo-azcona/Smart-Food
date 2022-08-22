import Step from './how-it-works-steps.component';
import app1 from '../../assets/img/app/app-screen-1.png';
import app2 from '../../assets/img/app/app-screen-2.png';
import app3 from '../../assets/img/app/app-screen-3.png';
import '../../helpers/general.styles.css';
import './how-it-works.style.css';

const HowItWorks = () => {
  const stepData = {
    info1: {
      step: '01',
      heading: 'Tell us what do you like!',
      description:
        'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter whatdiet you follow!',
      img: app1,
      imgAlt: 'Phone app preferences',
      imgToTheRight: true,
    },
    info2: {
      step: '02',
      heading: 'Approve your weekly meal plan',
      description:
        'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
      img: app2,
      imgAlt: 'Phone app meal plan',
      imgToTheRight: false,
    },
    info3: {
      step: '03',
      heading: 'Receive meals at convenient time',
      description:
        'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
      img: app3,
      imgAlt: 'Phone app delivery screen',
      imgToTheRight: true,
    },
  };

  return (
    <section className="section-how" id="howitworks">
      <div className="container">
        <span className="subheading">How it works?</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="container grid grid-center-v grid--2-columns">
        <Step stepData={stepData.info1} />
        <Step stepData={stepData.info2} />
        <Step stepData={stepData.info3} />
      </div>
    </section>
  );
};

export default HowItWorks;
