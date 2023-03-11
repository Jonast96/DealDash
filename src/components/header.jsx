import { Link } from "react-router-dom";
import React, { useContext, useState } from "react";
import cartImg from "../media/cart.png";
import { CartContext } from "./Cart";
import useApiCall from "./apiHook";

export default function Nav() {
  const [dropDownMenu, setDropDownMenu] = React.useState(false);

  const { cart } = useContext(CartContext);

  const [filteredSearch, setFilteredSearch] = React.useState([]);

  const { data, error, loading } = useApiCall(
    `https://api.noroff.dev/api/v1/online-shop`
  );

  const handleSearch = (query) => {
    const filteredSearch = data.filter((item) => {
      const title = item.title.toLowerCase();
      return title.includes(query.toLowerCase());
    });
    setFilteredSearch(filteredSearch);
  };

  function SearchResult() {
    return (
      <div>
        {filteredSearch.map((item) => {
          return (
            <>
              <div className="filteredItem">{item.title}</div>
            </>
          );
        })}
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
            <SearchBar onSearch={handleSearch} />
            <SearchResult />
          </div>
        </div>

        <div className="mobileSearch">
          <SearchBar onSearch={handleSearch} />
          <SearchResult />
        </div>
      </nav>
    </header>
  );
}
function SearchBar(props) {
  const [query, setQuery] = useState("");

  function handleInputChange(event) {
    event.preventDefault();
    props.onSearch(query);
    setQuery(event.target.value);
  }

  return (
    <input
      className={`flex-item`}
      placeholder="Search items"
      type="text"
      value={query}
      onChange={handleInputChange}
    />
  );
}
