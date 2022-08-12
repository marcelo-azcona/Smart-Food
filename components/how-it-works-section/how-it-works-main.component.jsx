import Step from './how-it-works-steps.component';

import app1 from '../../assets/img/app/app-screen-1.png';
import app2 from '../../assets/img/app/app-screen-2.png';
import app3 from '../../assets/img/app/app-screen-3.png';
import '../reusable.styles/reusable.styles.css';
import './how-it-works.style.css';

const HowItWorks = () => {
  const stepData = {
    data1: {
      step: '01',
      heading: '',
      description:
        'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter whatdiet you follow!',
      img: app1,
      imgAlt: 'Phone app preferences',
      imgToTheRight: true,
    },
    data2: {
      step: '02',
      heading: '',
      description:
        'Approve your weekly meal plan: Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
      img: app2,
      imgAlt: 'Phone app meal plan',
      imgToTheRight: false,
    },
    data3: {
      step: '03',
      heading: '',
      description:
        'Receive meals at convenient time: Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!',
      img: app3,
      imgAlt: 'Phone app delivery screen',
      imgToTheRight: true,
    },
  };

  return (
    <section className="section-how">
      <div className="container">
        <span className="subheading">How it works?</span>
        <h2 className="heading-secondary">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>

      <div className="container grid grid--2-columns">
        <Step stepData={stepData.data1} />
        <Step stepData={stepData.data2} />
        <Step stepData={stepData.data3} />
      </div>
    </section>
  );
};

export default HowItWorks;
