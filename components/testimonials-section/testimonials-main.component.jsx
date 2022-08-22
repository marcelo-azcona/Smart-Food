import testimonialOneImgPath from '../../assets/img/other customers/dave.jpg';
import testimonialTwoImgPath from '../../assets/img/other customers/ben.jpg';
import testimonialThreeImgPath from '../../assets/img/other customers/hannah.jpg';
import testimonialFourImgPath from '../../assets/img/other customers/steve.jpg';
import importAllImagesFromFolder from '../../helpers/ImportAll';
import ImgList from '../general-components/imgList.component';
import TestimonialCard from './testimonials-card.component';
import './testimonials.style.css';
import '../../helpers/general.styles.css';

const galleryImagesPath = importAllImagesFromFolder(
  require.context('../../assets/img/gallery', false, /\.(png|jpe?g|svg)$/)
);

const testimonialsData = {
  customer1: {
    imgPath: testimonialOneImgPath,
    imgAlt: 'A smiling customer',
    testimonialText:
      'Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.',
    customerName: 'Lucas Lopez',
  },
  customer2: {
    imgPath: testimonialTwoImgPath,
    imgAlt: 'A serious customer',
    testimonialText: `The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore! `,
    customerName: 'Ceferino Alvarez',
  },
  customer3: {
    imgPath: testimonialThreeImgPath,
    imgAlt: 'A surprised customer',
    testimonialText: `Smartfood is a life saver! I just started a company, so there's no time for cooking. I couldn't live without my daily meals now!`,
    customerName: 'Fabiana Garay',
  },
  customer4: {
    imgPath: testimonialFourImgPath,
    imgAlt: 'A happy customer',
    testimonialText: `I got Smartfood for the whole family, and it frees up so much time! Plus, everything is organic and vegan and without plastic. `,
    customerName: 'Javier Bollea',
  },
};

const Testimonials = () => {
  return (
    <section className="section-testimonials" id="testimonials">
      <div className="testimonials-container">
        <span className="subheading">Testimonials</span>
        <h2 className="heading-secondary">
          Check what our customers think about us!
        </h2>
        <div className="testimonials">
          <TestimonialCard testimonialData={testimonialsData.customer1} />
          <TestimonialCard testimonialData={testimonialsData.customer2} />
          <TestimonialCard testimonialData={testimonialsData.customer3} />
          <TestimonialCard testimonialData={testimonialsData.customer4} />
        </div>
      </div>
      <div className="gallery">
        <ImgList
          ImagesSrc={galleryImagesPath}
          alt="Beatifully arranged food"
          parentContainer={`figure`}
          parentContainerClass="gallery-item"
        />
      </div>
    </section>
  );
};

export default Testimonials;
