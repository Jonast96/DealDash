import './App.css';
import { Link, useParams, Routes, Route } from 'react-router-dom';


import CheckOut from './views/checkout/checkout';
import Deals from './views/deals/deals';
import Home from './views/home';
import PurchaseComplete from './views/purchaseComplete/purchaseComplete';
import SingleItem from './views/singleItem/singleItem';
import Support from './views/support/support';
import WhatsNew from './views/whatsNew/whatsNew';
import Cart from './views/cart/cart';


function Nav() {
  return (
    <nav>
      <h1><Link to={"/"}>DealDash</Link></h1>
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

function App() {
  return (
    <div>
      <Nav />
      <Routes>

        <Route path='/deals' element={<Deals />} />
        <Route path='/checkout' element={<CheckOut />} />
        <Route path='/' element={<Home />} />
        <Route path='/purchaseComplete' element={<PurchaseComplete />} />
        <Route path='/ingleItem' element={<SingleItem />} />
        <Route path='/support' element={<Support />} />
        <Route path='/whats-new' element={<WhatsNew />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </div>
  );
}

export default App;
