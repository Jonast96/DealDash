import { Link } from "react-router-dom";
import React, { useContext } from "react";
import cartImg from "../media/cart.png";
import { CartContext } from "./Cart";

export default function Nav() {
  const [dropDownMenu, setDropDownMenu] = React.useState(false);

  const { cart } = useContext(CartContext);

  return (
    <header>
      <nav className="nav">
        <div className="h1-menu">
          <div
            onClick={() => {
              setDropDownMenu((prevState) => !prevState);
            }}
            className={dropDownMenu ? "hamburger active" : "hamburger"}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1>
            <Link className="h1" to={"/"}>
              DealDash
            </Link>
          </h1>
        </div>

        <div className={dropDownMenu ? "dropdown active" : "dropdown"}>
          <div className="flex-item center">
            <Link to={"/cart"}>
              <div className="cartContainer">
                <img src={cartImg} alt={cartImg}></img>
                <p>{cart.length}</p>
              </div>
            </Link>
          </div>
          <ul className="flex-item">
            <li>
              <Link to={"/deals"}>Deals</Link>
            </li>
            <li>
              <Link to={"/whats-new"}>What's New</Link>
            </li>
            <li>
              <Link to={"/support"}>Support</Link>
            </li>
          </ul>
          <input
            className="flex-item"
            placeholder="Search items"
            type={"search"}
          ></input>
        </div>
      </nav>
    </header>
  );
}
