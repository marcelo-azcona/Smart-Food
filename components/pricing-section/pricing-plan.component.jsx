import ItemList from '../general-components/item-list.components';
import '../../helpers/general.styles.css';
import './pricing.style.css';

const PricingPlan = ({ planDetails }) => {
  const { planName, price, planText, featuresList } = planDetails;

  return (
    <div className="pricing-plan">
      <header className="plan-header">
        <p className="plan-name">{planName}</p>
        <p className="plan-price">
          <span>$</span>
          {price}
        </p>
        <p className="plan-text">{planText}</p>
      </header>
      <ItemList list={featuresList} />
      <div className="plan-sing-up">
        <a href="#" className="btn btn--full">
          Start now!
        </a>
      </div>
    </div>
  );
};

export default PricingPlan;
