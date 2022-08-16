const MealCard = ({ imgSrc, alt }) => {
  <div className="meal">
    <img src={imgSrc} className="meal" alt="Japanese Gyoza"></img>
    <span className="tag">Vegetarian</span>
    <ul className="meal-attributes">
      <li className="meal-attribute"></li>
      <li className="meal-attribute"></li>
      <li className="meal-attribute"></li>
      <li className="meal-attribute"></li>
    </ul>
  </div>;
};

export default MealCard;
