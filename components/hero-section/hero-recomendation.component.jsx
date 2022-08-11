import importAllImagesFromFolder from '../../helpers/ImportAll';

const customerImagesSrc = importAllImagesFromFolder(
  require.context('../../assets/img/customers', false, /\.(png|jpe?g|svg)$/)
);

const Recomendation = () => {
  return (
    <div className="delivered-meals">
      <div className="delivered-images">
        {Object.values(customerImagesSrc).map((item) => {
          return <img src={item} alt="happy-customer" />;
        })}
      </div>
      <p className="delivered-text">
        <span>250,000+</span> meals delivered last year!
      </p>
    </div>
  );
};

export default Recomendation;
