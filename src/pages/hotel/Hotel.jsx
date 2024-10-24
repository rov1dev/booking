import "./Hotel.css";
import { allHotels, rooms, facilities } from "../../data";
import { useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import { GiDoubleStreetLights } from "react-icons/gi";
import { MdPool } from "react-icons/md";
import { FaCircleArrowRight, FaCircleLeft, FaCircleXmark, FaCity, FaMapLocationDot } from "react-icons/fa6";
import { TbParkingCircle } from "react-icons/tb";
import { useState } from "react";

const Hotel = () => {
  const [open, setOpen] = useState(false);
  const [slideNumber, setSlideNumber] = useState(0);

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber == 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber + 1;
    }
    setSlideNumber(newSlideNumber)
  };

  const { id } = useParams();
  const hotel = allHotels.find((hotel) => hotel.id === +id);
  return (
    <div>
      <Navbar />
      <div className="hotel-container">
        {open && (
          <div className="slider">
            <FaCircleXmark className="close" onClick={()=> setOpen(false)}/>
            <FaCircleLeft className="arrow" onClick={()=> handleMove('l') }/>
              <div className="slider-wrapper">
                <img src={rooms[slideNumber].image} alt="erorr" className="slider-img" />
              </div>
              <FaCircleArrowRight className="arrow" onClick={()=> handleMove('r')}/>
          </div>
        )}

        <div className="hotel-wrapper">
          <h1 className="hotel-title">{hotel.title}</h1>
          <div className="hotel-location">
            <FaMapLocationDot />
            <span>{hotel.location}</span>
            {hotel.location}
          </div>
          <span className="hotel-distance">
            Excelent location - 500m from center
          </span>
          <span className="hotel-price">
            Enjoy a comfortable stay starting at ${hotel.price}per night
          </span>
          <div className="hotel-images">
            {rooms.map((room, i) => (
              <div key={i} className="hotel-images-wrapper">
                <img src={room.image} alt="erorr" className="hotel-img" onClick={()=> handleOpen(i)} />
              </div>
            ))}
          </div>
          <div className="hotel-details">
            <div className="hotel-details-text">
              <h1 className="hotel-tiitle">About this hotel</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Corporis possimus nulla atque commodi mollitia culpa error, quia
                nesciunt, exercitationem illum aliquam. Deleniti dicta eius
                accusantium sit, architecto maiores quae voluptas quod nostrum.
                Corporis dicta nobis delectus animi culpa itaque minus. Lorem
                ipsum dolor sit, amet consectetur adipisicing elit. Corporis
                possimus nulla atque commodi mollitia culpa error, quia
                nesciunt, exercitationem illum aliquam. Deleniti dicta eius
                accusantium sit, architecto maiores quae voluptas quod nostrum.
                Corporis dicta nobis delectus animi culpa itaque minus.
              </p>
              <div className="hotel-facilities">
                <h1 className="hotel-facilities-title">Hotel Facilities</h1>
                <div className="facilities">
                  {facilities.map((facilitie) => (
                    <div key={facilitie.id} className="facilities">
                      <span className="facilities-icon">{facilitie.icon}</span>
                      <span>{facilitie.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="hotel-highlights">
              <h1>Hotel highlights</h1>
              <h4>Perfect for a 4-night stay!</h4>
              <span>
                Located in the real heart of Karakow, this property has an
                excelent location score of 9.8
              </span>
              <h4>Breakfast info</h4>
              <span>
                Continental, Fresh, Indulgent, Protain-packed, Savory, Gourmet
              </span>
              <h4>Room With </h4>
              <ul>
                <li>
                  <GiDoubleStreetLights /> QUIET STREET VIEW
                </li>
                <li>
                  <MdPool /> Pool wirt a view
                </li>
                <li>
                  <FaCity /> city view
                </li>
                <li>
                  <TbParkingCircle />
                  Free Parking
                </li>
              </ul>
              <button>Book Now!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
