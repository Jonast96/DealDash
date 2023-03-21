//React imports
import { Routes, Route } from 'react-router-dom';

//Component imports
import Nav from './components/Header';
import Footer from './components/Footer';
import Deals from './views/deals/deals';
import Home from './views/home';
import Support from './views/support/support';
import WhatsNew from './views/whatsNew/whatsNew';
import Cart from './views/cart/cart';
import SingleItem from "./views/singleItem/singleItem"
import CheckOut from './views/checkout/checkout';
import "./styles/styles.scss"
import React from 'react';
import { CartProvider } from './components/Cart';

function Layout(props) {
  return (
    <>
      <Nav />
      {props.children}
      <Footer />
    </>
  )
}


function App() {


  return (
    <CartProvider>
      <div className='app'>
        <Layout>
          <Routes>
            <Route path='/deals' element={<Deals />} />
            <Route path='/' element={<Home />} />
            <Route path='/support' element={<Support />} />
            <Route path='/whats-new' element={<WhatsNew />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<SingleItem />} />
            <Route path='/checkout' element={<CheckOut />} />
          </Routes>
        </Layout>
      </div>
    </CartProvider>
  );
}

export default App;
