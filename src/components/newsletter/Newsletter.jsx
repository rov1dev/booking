import "./Newsletter.css";
import discover from "../../assets/discover.jpg";
const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-wrapper">
        <div className="newsletter-image">
          <img src={discover} alt="erorr" />
        </div>
        <div className="newsletter-content">
          <h1>Explore the world with us</h1>
          <p>Subscribe to see secret deals drop the moment you sign up!</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" />
            <button>Subsribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
