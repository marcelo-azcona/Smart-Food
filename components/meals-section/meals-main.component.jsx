import MealCard from './meals-card.component';
import DietList from './meals-list.component';
import meal1ImagePath from '../../assets/img/meals/meal-1.jpg';
import meal2ImagePath from '../../assets/img/meals/meal-2.jpg';
import './meals.style.css';
import '../../helpers/general.styles.css';

const mealsDescription = {
  meal1: {
    title: 'Japanese Gyozas',
    imgSrc: meal1ImagePath,
    alt: 'japanese gyozas',
    tags: 'vegetarian',
    attributes: {
      calories: '650 calories',
      nutriscore: '74',
      rating: '4.9 rating (555)',
    },
  },
  meal2: {
    title: 'Avocado Salad',
    imgSrc: meal2ImagePath,
    alt: 'avocado salad',
    tags: ['vegan', 'paleo'],
    attributes: {
      calories: '400 calories',
      nutriscore: '92',
      rating: '4.8 rating (489)',
    },
  },
};

const typeOfDiets = [
  'Vegetarian',
  'Vegan',
  'Pescatarian',
  'Gluten-free',
  'Lactose-free',
  'Keto',
  'Paleo',
  'Low FODMAP',
  'Kid-Friendly',
];

const MealsSection = () => {
  return (
    <section className="section-meals" id="meals">
      <div className="container center-text">
        <span className="subheading">Meals</span>
        <h2 className="heading-secondary">
          SmartFood AI chooses form 5000+ recipes!
        </h2>
      </div>
      <div className="container grid grid--3-columns">
        <MealCard foodDescription={mealsDescription.meal1} />
        <MealCard foodDescription={mealsDescription.meal2} />
        <DietList typeOfDiets={typeOfDiets} />
      </div>
      <div className="container all-recipes">
        <a href="#" className="link">
          See all the recipes &rarr;
        </a>
      </div>
    </section>
  );
};

export default MealsSection;
