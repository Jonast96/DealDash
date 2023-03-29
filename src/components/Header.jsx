import { Link } from "react-router-dom";
import React, { useContext } from "react";
import cartImg from "../media/cart.png";
import { CartContext } from "./Cart";
import useApiCall from "../hooks/useApiCall";

/**
 * Header component displaying the navigation bar and search functionality
 * @returns {JSX.Element} Header component
 */
export default function Header() {
  /**
   * State for the search query
   * @type {string}
   */
  const [query, setQuery] = React.useState("");

  /**
   * State for dropdown menu visibility
   * @type {boolean}
   */
  const [dropDownMenu, setDropDownMenu] = React.useState(false);

  /**
   * Cart context object for accessing cart items
   * @type {object}
   */
  const { cart } = useContext(CartContext);

  /**
   * API data, error, and loading states
   * @type {object}
   */
  const { data, error, loading } = useApiCall(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  /**
   * Filtered data based on the search query
   * @type {Array}
   */
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(query)
  );

  /**
   * Clears the search query and hides the filtered items when the user clicks anywhere on the page
   */
  window.addEventListener("click", () => {
    setQuery("");
  });

  /**
   * Search result component displaying the filtered items
   * @returns {JSX.Element} Search result component
   */
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
                    <p>{item.title}</p>
                    <p>{item.price},-</p>
                  </div>
                </Link>
              );
            })
          : ""}
      </div>
    );
  }

  /**
   * Gets the total number of items in the cart
   * @function
   * @returns {number} Total number of items in the cart
   */
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
