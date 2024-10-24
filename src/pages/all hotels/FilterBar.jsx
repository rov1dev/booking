import React, { useState } from "react";
import { filterOptions } from "../../data";
import { FaChevronDown } from "react-icons/fa";

const FilterBar = () => {
  const [open, setOpen] = useState(false);
  const [minPrice, setMinPrice] = useState(250);
  const [maxPrice, setMaxPrice] = useState(500);
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [openFilter, setOpenFilter] = useState(null);
  const handleSliderChange = (e) => {
    const values = e.target.value.split(",").map(Number);
    setPriceRange(values);
    setMinPrice(values[0]);
    setMaxPrice(values[1]);
  };

  const handleOpenFilter = (inx) => {
    setOpenFilter(openFilter === inx ? null : inx);
  };
  return (
    <div className="filter-bar">
      <div className="filter-item">
        <span onClick={() => setOpen(!open)}>
          Price <FaChevronDown className="filter-icon" />
        </span>
        {open && (
          <div className="filter-options">
            <div className="filter-title">Price</div>

            <div className="price-fitler">
              <input
                type="range"
                min="0"
                max="500"
                value={priceRange}
                onChange={handleSliderChange}
                className="price-slider"
              />
              <div className="price-range-labels">
                <span>${priceRange[0]}</span>
                <span>$500</span>
              </div>
              <div className="price-inputs">
                <div
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="price-input"
                >
                  Min Price <span>${minPrice}</span>
                </div>
                <span>-</span>
                <div
                  value={maxPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                  className="price-input"
                >
                  Max Price <span>$500</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      {filterOptions.map(( filter , inx) => (
        <div key={inx} className="filter-item">
          <span onClick={() => handleOpenFilter(inx)}>
            {filter.title}
            <FaChevronDown className="filter-icon" />
          </span>
          {openFilter === inx && (
            <div className="filter-options">
              <div className="filter-title">{filter.title}</div>
              {filter.options.map((option) => (
                <label key={option} className="filter-option">
                  <input type="checkbox" />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default FilterBar;
