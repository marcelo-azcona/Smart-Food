const TestimonialCard = ({ testimonialData }) => {
  const { imgPath, imgAlt, testimonialText, customerName } = testimonialData;

  return (
    <div className="testimonial">
      <img className="testimonial-img" src={imgPath} alt={imgAlt} />
      <blockquote className="testimonial-text">
        {testimonialText}
        <p className="testimonia-name">&mdash; {customerName}</p>
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
