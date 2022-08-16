import ImgList from '../general-components/imgList.component';
import importAllImagesFromFolder from '../../helpers/ImportAll';
import './meals.style.css';
import '../../helpers/general.styles.css';

const mealsImagesPath = importAllImagesFromFolder(
  require.context('../../assets/img/logos', false, /\.(png|jpe?g|svg)$/)
);

const altList = [
  'business-insider',
  'forbes',
  'tech-crunch',
  'TNYT',
  'usa-today',
];

const MealsSection = () => {
  return (
    <section className="section-meals">
      <div className="container">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          SmartFood AI chooses form 5000+ recipes!
        </h2>
      </div>
      <div className="container grid grid--3-columns">
        <div className="meal"></div>

        <div className="meal">Meals</div>
        <div className="list">List of meals</div>
      </div>
    </section>
  );
};

export default MealsSection;
