import { Link } from 'react-router-dom';


export default function Nav() {
    return (
      <nav className='nav'>
        <h1><Link className='h1' to={"/"}>DealDash</Link></h1>
        <ul>
          <li><Link to={"/deals"}>Deals</Link></li>
          <li><Link to={"/whats-new"}>What's New</Link></li>
          <li><Link to={"/support"}>Support</Link></li>
        </ul>
        <input type={'search'}></input>
        <p><Link to={"/cart"}>Cart</Link></p>
      </nav>
    )
  }