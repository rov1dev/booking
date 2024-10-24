import { CiLocationOn } from "react-icons/ci";
import "./Hotels.css";
import { useNavigate } from "react-router-dom";
const Hotels = ({ hotels, heading }) => {
  const navigate = useNavigate();

  const handleValueDetail = (id) => {
    navigate(`/hotels/${id}`);
  };
  return (
    <div className="hotels-container">
      <h1 className="hotels-header">{heading}</h1>
      <div className="hotels">
        {hotels.map(({ id, image, location, name, rate, review, price }) => (
          <div key={id} className="hotel-item">
            <img
              src={image}
              className="hotel-image"
              alt="erorr"
              onClick={() => handleValueDetail(id)}
            />
            <div className="hotel-content">
              <span className="hotel-location">
                <CiLocationOn className="icon" />
                {location}
              </span>
              <span
                className="hotel-name"
                onClick={() => handleValueDetail(id)}
              >
                {name}
              </span>
              <div className="hotel-rate">
                <button>{rate}</button>
                <span>{review}</span>
              </div>
              <span className="hotel-price">
                <span>
                  From: <span>${price} </span>/night
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hotels;
