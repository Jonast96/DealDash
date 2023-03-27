import { Link } from "react-router-dom";
import React, { useContext } from "react";
import cartImg from "../media/cart.png";
import { CartContext } from "./Cart";
import useApiCall from "../hooks/useApiCall";

export default function Header() {
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

  //Removes the filtered items from search if user clicks anywhere on the page
  window.addEventListener("click", () => {
    setQuery("");
  });

  function SearchResult() {
    return (
      <div className="filteredItemContainer">
        {query.length > 0
          ? filteredData.map((item) => {
              return (
                <Link
                  key={item.id}
                  onClick={() => setQuery("")}
                  to={`/product/${item.id}`}
                >
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

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

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
                <p>{getTotalItems()}</p>
              </div>
            </Link>
          </div>
          <ul className="flex-item">
            <li>
              <Link to={"/deals"}>Deals</Link>
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
              placeholder="Search items"
            />
            <SearchResult />
          </div>
        </div>

        <div className="mobileSearch">
          <input
            placeholder="Search items"
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
