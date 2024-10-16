import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { FaRegUserCircle } from "react-icons/fa";
import { MyContext } from "../App";
import { useContext } from "react";

function NavBar() {
  const { userData } = useContext(MyContext);
  console.log(userData);
  return (
    <div className="container">
      <nav>
        <div className={`${styles.items_nav}`}>
          <NavLink to="/">
            <div className="nav-logo">BxB</div>
          </NavLink>

          <input
            type="text"
            placeholder="search"
            className={`${styles.items_input}`}
          />

          <ul className={`${styles.items_ul} `}>
            <details>
              <summary>
                <FaRegUserCircle />
                <span>{userData ? userData.role : "Login"}</span>
              </summary>
              <ul>
                <NavLink to="/myprofile">
                  <li>MyProfile</li>
                </NavLink>
                <NavLink to="/order">
                  <li>Order</li>
                </NavLink>
                <NavLink to="">
                  <li>Logout</li>
                </NavLink>
              </ul>
            </details>
            <NavLink to="/cart">
              <li>Cart</li>
            </NavLink>

            <NavLink to="/contact">
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
