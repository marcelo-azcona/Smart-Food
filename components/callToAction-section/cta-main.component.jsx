import CtaForm from './cta-form.component';
import './cta-style.css';
import '../../helpers/general.styles.css';

const CallToAction = () => {
  return (
    <section className="section-cta">
      <div className="container">
        <div className="cta">
          <div className="cta-textbox">
            <h2 className="heading-secondary">
              Get your favourite meal for free!
            </h2>
            <p className="cta-text">
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>
            <CtaForm />
          </div>
          <div
            className="cta-imgbox"
            role="img"
            aria-label="Woman enjoying food"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
