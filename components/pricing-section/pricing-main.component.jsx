import { IoInfinite } from 'react-icons/io5';
import { IoNutritionOutline } from 'react-icons/io5';
import { IoEarthOutline } from 'react-icons/io5';
import { IoPause } from 'react-icons/io5';
import PricingPlan from './pricing-plan.component';
import PricingFeature from './pricing-feature.component';
import '../../helpers/general.styles.css';
import './pricing.style.css';

const pricingList = {
  pricing1: {
    planName: 'Starter',
    price: 399,
    planText: 'per month. That`s just $13 per meal!',
    featuresList: [
      '1 meal per day',
      'Order from 11am and 9pm',
      'Delivery is free',
      'Access to all recipes',
    ],
  },
  pricing2: {
    planName: 'Complete',
    price: 699,
    planText: 'per month. That`s just $11.65 per meal!',
    featuresList: [
      '2 meal per day',
      'Order 24/7',
      'Delivery is free',
      'Get access to custom recipes',
    ],
  },
};

const pricingFeatures = {
  feature1: {
    icon: IoInfinite,
    title: 'Never cook again!',
    content:
      'Our subscriptions cover 365 days per year, even including major holidays.',
  },
  feature2: {
    icon: IoNutritionOutline,
    title: 'Local and organic',
    content:
      'Our cooks only use local, fresh, and organic products to prepare your meals.',
  },
  feature3: {
    icon: IoEarthOutline,
    title: 'No waste',
    content:
      'All our partners only use reusable containers to package all your meals.',
  },
  feature4: {
    icon: IoPause,
    title: 'Pause anytime',
    content:
      'Going on vacation? Just pause your subscription, and we refund unused days.',
  },
};

const PricingSection = () => {
  return (
    <section className="section-pricing">
      <div className="container">
        <span className="subheading">Pricing</span>
        <h2 className="heading-secondary">
          Eating well without worrying about your wallet!
        </h2>
      </div>

      <div className="container grid grid--2-columns margin-bottom-medium">
        <PricingPlan planDetails={pricingList.pricing1} />
        <PricingPlan planDetails={pricingList.pricing2} />
      </div>

      <div className="container">
        <p className="plan-details">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
      </div>

      <div className="container grid grid--4-columns">
        <PricingFeature featureContent={pricingFeatures.feature1} />
        <PricingFeature featureContent={pricingFeatures.feature2} />
        <PricingFeature featureContent={pricingFeatures.feature3} />
        <PricingFeature featureContent={pricingFeatures.feature4} />
      </div>
    </section>
  );
};

export default PricingSection;
