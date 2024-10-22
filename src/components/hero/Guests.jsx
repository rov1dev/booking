import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { GoPeople } from "react-icons/go";

const Guests = () => {
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  return (
    <div className="guests">
      <GoPeople className="guests-icon" />
      <div className="guests-content">
        <label htmlFor="">Guests</label>
        <span
          onClick={() => setOpenOptions(!openOptions)}
        >{`${options.adult} adult, ${options.children} children, ${options.room} room`}</span>
        {openOptions && (
          <div className="options">
            <div className="option-item">
              <span>Adult</span>
              <div className="option-counter">
                <button
                  disabled={options.adult <= 1}
                  className="option-counter-button"
                  onClick={() => {
                    handleOption("adult", "d");
                  }}
                >
                  <FaMinus />
                </button>
                <span>{options.adult}</span>
                <button
                  className="option-counter-button"
                  onClick={() => {
                    handleOption("adult", "i");
                  }}
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className="option-item">
              <span>Children</span>
              <div className="option-counter">
                <button
                  disabled={options.children <= 0}
                  className="option-counter-button"
                  onClick={() => {
                    handleOption("children", "d");
                  }}
                >
                  <FaMinus />
                </button>
                <span>{options.children}</span>
                <button
                  className="option-counter-button"
                  onClick={() => {
                    handleOption("children", "i");
                  }}
                ><FaPlus /></button>
              </div>
            </div>

            <div className="option-item">
              <span>Room</span>
              <div className="option-counter">
                <button
                  disabled={options.room <= 1}
                  className="option-counter-button"
                  onClick={() => {
                    handleOption("room", "d");
                  }}
                >
                  <FaMinus />
                </button>
                <span>{options.room}</span>
                <button
                  className="option-counter-button"
                  onClick={() => {
                    handleOption("room", "i");
                  }}
                ><FaPlus /></button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Guests;
