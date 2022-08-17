import { IoCheckmarkSharp } from 'react-icons/io5';
import '../../helpers/general.styles.css';

const DietList = ({ typeOfDiets }) => {
  return (
    <div className="diets">
      <h3 className="heading-tertiary">We work with any diet:</h3>
      <ul className="list">
        {typeOfDiets.map((diet) => {
          return (
            <li className="list-item">
              <IoCheckmarkSharp className="list-icon" />
              <span>{diet}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default DietList;
