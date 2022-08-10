import importAllImagesFromFolder from '../../helpers/ImportAll';

const customerImagesSrc = importAllImagesFromFolder(
  require.context('../../assets/img/customers', false, /\.(png|jpe?g|svg)$/)
);

const Recomendation = () => {
  return (
    <div className="delivered-meals">
      <div className="delivered-images">
        {Object.values(customerImagesSrc).map((item) => {
          return <img src={item} alt="Customer" />;
        })}
      </div>

      <p></p>
    </div>
  );
};

export default Recomendation;
