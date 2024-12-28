import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import redDot from "../assets/reddot1.png";
import greenDot from "../assets/greendot.png";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg md:bg-yellow-100 lg:bg-green-100">
      <div className="logo-container">
        <img className="w-32" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex pt-4 m-4">
          <li className="flex px-4 w-30">
            Online Status:
            <img
              className="w-6 h-6 mb-4"
              src={onlineStatus ? greenDot : redDot}
            />
          </li>
          <li className="mx-1">
            <Link to="/">Home</Link>
          </li>
          <li className="mx-1">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mx-1">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mx-1">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="mx-1">Cart</li>
          <button
            className="mb-4 mx-2"
            onClick={() =>
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
