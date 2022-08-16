import importAllImagesFromFolder from '../../helpers/ImportAll';
import ImgList from '../general-components/imgList.component';
import './featured.style.css';
import '../../helpers/general.styles.css';

const featuredImagesPath = importAllImagesFromFolder(
  require.context('../../assets/img/logos', false, /\.(png|jpe?g|svg)$/)
);

const altList = [
  'business-insider',
  'forbes',
  'tech-crunch',
  'TNYT',
  'usa-today',
];

const Featured = () => {
  return (
    <section className="section-featured">
      <div className="container">
        <h2 className="heading-featured">As featured in</h2>
        <div className="logos">
          <ImgList ImagesSrc={featuredImagesPath} alt={altList} />
        </div>
      </div>
    </section>
  );
};

export default Featured;
