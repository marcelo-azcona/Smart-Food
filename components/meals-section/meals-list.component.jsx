import ItemList from '../general-components/item-list.components';
import '../../helpers/general.styles.css';

const DietList = ({ typeOfDiets }) => {
  return (
    <div className="diets">
      <h3 className="heading-tertiary">We work with any diet:</h3>
      <ItemList list={typeOfDiets} />
    </div>
  );
};

export default DietList;
