import { BiSolidPlaneAlt } from "react-icons/bi";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
            <BiSolidPlaneAlt/>
            <span>Rise of Coding</span>
        </div>

        <div>
            <button className="navbar-button">Book now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
