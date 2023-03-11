import { Link } from "react-router-dom";
import React, { useContext } from "react";
import cartImg from "../media/cart.png";
import { CartContext } from "./Cart";
import useApiCall from "./apiHook";

export default function Nav() {
  const [query, setQuery] = React.useState("");

  const [dropDownMenu, setDropDownMenu] = React.useState(false);

  const { cart } = useContext(CartContext);

  const { data, error, loading } = useApiCall(
    `https://api.noroff.dev/api/v1/online-shop`
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  function SearchResult() {
    return (
      <div className="filteredItemContainer">
        {query.length > 0
          ? filteredData.map((item) => {
              return (
                <Link to={`/product/${item.id}`}>
                  <div className="filteredItem" key={item.id}>
                    {item.title}
                  </div>
                </Link>
              );
            })
          : ""}
      </div>
    );
  }

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
          <div className="desktopSearch">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="search"
            />
            <SearchResult />
          </div>
        </div>

        <div className="mobileSearch">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            type="search"
          />
          <SearchResult />
        </div>
      </nav>
    </header>
  );
}
