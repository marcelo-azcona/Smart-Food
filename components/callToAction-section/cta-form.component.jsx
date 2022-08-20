import './cta-style.css';
import '../../helpers/general.styles.css';

const CtaForm = () => {
  return (
    <form className="cta-form" action="#">
      <div>
        <label htmlFor="full-name">Full Name</label>
        <input id="full-name" type="text" placeholder="Your name" required />
      </div>

      <div>
        <label htmlFor="email">Email adress</label>
        <input
          id="email"
          type="email"
          placeholder="email@example.com"
          required
        />
      </div>

      <div>
        <label htmlFor="select-where">Where did you hear from us?</label>
        <select id="select-where" required>
          <option value="">Please choose one option</option>
          <option value="friends">Friends and family</option>
          <option value="youtube">Youtube video</option>
          <option value="podcast">Podcast</option>
          <option value="facebook">Facebook ad</option>
          <option value="tv">On TV</option>
          <option value="others">Others</option>
        </select>
      </div>

      <button className="btn btn--form" type="submit">
        Sign up now!
      </button>
    </form>
  );
};

export default CtaForm;
