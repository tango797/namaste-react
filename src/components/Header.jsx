import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlineStatus";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("login");
  const onlineStatus = useOnlineStatus(); //custom hook

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
          <li className="px-4">Cart</li>
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
