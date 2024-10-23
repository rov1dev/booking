import "./Footer.css";
import { destinations, info, services } from "../../data";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-lists">
        <ul className="footer-list">
          <h2>Destinations</h2>
          {destinations.map(({ id, title }) => (
            <li key={id} className="footer-list-item">
              {title}
            </li>
          ))}
        </ul>
        <ul className="footer-list">
          <h2>Information</h2>
          {info.map(({ id, title }) => (
            <li key={id} className="footer-list-item">
              {title}
            </li>
          ))}
        </ul>
        <ul className="footer-list">
          <h2>Services</h2>
          {services.map(({ id, title }) => (
            <li key={id} className="footer-list-item">
              {title}
            </li>
          ))}
        </ul>
        <ul className="footer-list">
          <h2>Contact</h2>
          <li className="footer-list-item"><FaLocationDot/> Street Name, Cith Name</li>
          <li className="footer-list-item"><FaPhoneAlt/> +998 33 702  44 41</li>
          <li className="footer-list-item"><IoMdMail/> nazarov1.off@gmail.com</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
