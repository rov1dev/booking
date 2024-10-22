import { BsArrowRight } from "react-icons/bs";
import { IoCalendarOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

const Date = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="date">
      <div className="check-in">
        <IoCalendarOutline className="date-icon" />
        <div className="date-content">
          <label htmlFor="">Check-in</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            placeholderText="add-date"
            dateFormat="MM/dd/yyyy"
            className="add-date"
          />
        </div>
      </div>

      <span>
        <BsArrowRight />
      </span>

      <div className="check-out">
        <IoCalendarOutline className="date-icon" />
        <div className="date-content">
          <label>Check-out</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            dateFormat="MM/dd/yyyy"
            className="add-date"
            placeholderText="add-date"
          />
        </div>
      </div>
    </div>
  );
};

export default Date;
