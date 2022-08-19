import './pricing.style.css';

const PricingFeature = ({ featureContent }) => {
  const { icon: Icon, title, content } = featureContent;

  return (
    <div className="feature">
      <Icon className="feature-icon" />
      <p className="feature-title">{title}</p>
      <p className="feature-text">{content}</p>
    </div>
  );
};

export default PricingFeature;
