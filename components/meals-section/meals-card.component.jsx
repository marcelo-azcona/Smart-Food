import { IoStarOutline } from 'react-icons/io5';
import { IoRestaurantOutline } from 'react-icons/io5';
import { IoFlameOutline } from 'react-icons/io5';

const MealCard = ({ foodDescription }) => {
  const { title, imgSrc, alt, tags, attributes } = foodDescription;

  return (
    <div className="meal">
      <img src={imgSrc} className="meal-img" alt={alt}></img>
      <div className="meal-content">
        <div className="meal-tags">
          {Array.isArray(tags) ? (
            tags.map((tag) => <span className={`tag tag--${tag}`}>{tag}</span>)
          ) : (
            <span className={`tag tag--${tags}`}>{tags}</span>
          )}
        </div>
        <p className="meal-title">{title}</p>
        <ul className="meal-attributes">
          <li className="meal-attribute">
            <IoFlameOutline className="meal-icon" />
            <span className="attribute-description">{attributes.calories}</span>
          </li>
          <li className="meal-attribute">
            <IoRestaurantOutline className="meal-icon" />
            <span className="attribute-description">
              Nutriscore: {attributes.nutriscore}
            </span>
          </li>
          <li className="meal-attribute">
            <IoStarOutline className="meal-icon" />
            <span className="attribute-description">{attributes.rating}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MealCard;
