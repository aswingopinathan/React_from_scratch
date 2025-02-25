import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import redDot from "../assets/reddot1.png";
import greenDot from "../assets/greendot.png";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  // Subscribe to the store
  const cartItems = useSelector((store) => store.cart.items);
  // console.log("cartItems", cartItems);

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
          <li className="mx-1 font-bold text-xl">
            <Link to="/cart"> Cart ({cartItems.length} items)</Link>
          </li>
          {!loggedInUser && (
            <button
              className="mb-4 mx-2 px-4 py-1 bg-red-100 rounded-lg"
              // className="px-4 py-2 bg-red-100 rounded-lg"

              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          )}
          <li className="mx-1 text-lg font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
