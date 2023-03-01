import { Link, useParams, Routes, Route } from 'react-router-dom';
import Nav from './components/header';


import Deals from './views/deals/deals';
import Home from './views/home';
import Support from './views/support/support';
import WhatsNew from './views/whatsNew/whatsNew';
import Cart from './views/cart/cart';
import "./styles/styles.scss"




function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/deals' element={<Deals />} />
        <Route path='/' element={<Home />} />
        <Route path='/support' element={<Support />} />
        <Route path='/whats-new' element={<WhatsNew />} />
        <Route path='/cart' element={<Cart />} />

      </Routes>
    </div>
  );
}

export default App;
