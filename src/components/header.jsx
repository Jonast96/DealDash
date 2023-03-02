import { Link } from 'react-router-dom';
import React from 'react';

export default function Nav() {

  const [dropDownMenu, setDropDownMenu] = React.useState(false)


    return (
      <header>
      <nav className='nav'>
      <div className='h1-menu'>
        <div onClick={()=>{setDropDownMenu((prevState) => !prevState )}} className={dropDownMenu ? "hamburger active" : "hamburger"}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h1><Link className='h1' to={"/"}>DealDash</Link></h1>
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
      </header>
    )
  }