import { LOGO_URL } from "../utils/constant";
import { useState,us } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlineStatus";
import { useSelector } from "react-redux";
import UserContext from "../utils/userContext";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  const onlineStatus = useOnlineStatus(); //custom hook
const context = useContext();
  // are subscribing to the store using selector hook . it is function
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-pink-100 mb-3 shadow-lg ">
      <div className="w-24 m-3">
        <img src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-3">
          <li className="px-4">online Status {onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/contact">contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/about">about us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="px-4 font-bold text-xl">
          <Link to="/cart">Cart- ({cartItems.length})</Link>
            </li>
          <button
            className="login-btn bg-slate-200 border border-solid border-black p-2 rounded-lg"
            onClick={() => {
              loginBtn === "login"
                ? setLoginBtn("logout")
                : setLoginBtn("login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
