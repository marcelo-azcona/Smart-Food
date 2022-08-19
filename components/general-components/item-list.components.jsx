import { IoCheckmarkSharp } from 'react-icons/io5';
import '../../helpers/general.styles.css';

const ItemList = ({ list }) => {
  return (
    <ul className="list">
      {list.map((listItem) => {
        return (
          <li className="list-item">
            <IoCheckmarkSharp className="list-icon" />
            <span>{listItem}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default ItemList;
