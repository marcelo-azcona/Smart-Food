import './how-it-works.style.css';

const Step = (props) => {
  let { step, heading, description, img, imgAlt, imgToTheRight } =
    props.stepData;

  if (imgToTheRight) {
    return (
      <>
        <div className="step-text-box">
          <p className="step-number">{step}</p>
          <h3 className="heading-tertiary">{heading}</h3>
          <p className="step-description">{description}</p>
        </div>
        <div className="step-img-box">
          <img className="step-img" src={img} alt={imgAlt} />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="step-img-box">
          <img className="step-img" src={img} alt={imgAlt} />
        </div>
        <div className="step-text-box">
          <p className="step-number">{step}</p>
          <h3 className="heading-tertiary">{heading}</h3>
          <p className="step-description">{description}</p>
        </div>
      </>
    );
  }
};

export default Step;
