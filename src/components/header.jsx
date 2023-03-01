import { Link } from 'react-router-dom';
import React from 'react';

export default function Nav() {

  const [dropDownMenu, setDropDownMenu] = React.useState(false)
  function changeState () {
    setDropDownMenu((prevState) => !prevState )
  }

    return (
      <nav className='nav'>
        <h1><Link className='h1' to={"/"}>DealDash</Link></h1>
        <div onClick={()=>{changeState()}} className={dropDownMenu ? "hamburger active" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <div className={dropDownMenu ? "dropdown active": "dropdown"}>
        <p className='flex-item'><Link to={"/cart"}>Cart</Link></p>
        <ul className='flex-item'>
          <li><Link to={"/deals"}>Deals</Link></li>
          <li><Link to={"/whats-new"}>What's New</Link></li>
          <li><Link to={"/support"}>Support</Link></li>
        </ul>
        <input className='flex-item' placeholder='Search items' type={'search'}></input>
        </div>
      </nav>
    )
  }