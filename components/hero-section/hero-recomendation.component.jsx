import importAllImagesFromFolder from '../../helpers/ImportAll';
import ImgList from '../general-components/imgList.component';

const customerImagesPath = importAllImagesFromFolder(
  require.context('../../assets/img/customers', false, /\.(png|jpe?g|svg)$/)
);

const imgAltsList = [];

const Recomendation = () => {
  return (
    <div className="delivered-meals">
      <div className="delivered-images">
        <ImgList ImagesSrc={customerImagesPath} alt="happy-customers" />
      </div>
      <p className="delivered-text">
        <span>250,000+</span> meals delivered last year!
      </p>
    </div>
  );
};

export default Recomendation;
