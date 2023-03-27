//React imports
import { Routes, Route } from 'react-router-dom';

//Component imports
import Deals from './views/deals/deals';
import Home from './views/home';
import Support from './views/support/support';
import Cart from './views/cart/cart';
import SingleItem from "./views/singleItem/singleItem"
import CheckOut from './views/checkout/checkout';
import "./styles/styles.scss"
import React from 'react';
import { CartProvider } from './components/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import PurchaseComplete from "./views/purchaseComplete/purchaseComplete"
function Layout(props) {
  return (
    <>
      <Header />
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
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:id' element={<SingleItem />} />
            <Route path='/checkout' element={<CheckOut />} />
            <Route path='/purchaseComplete' element={<PurchaseComplete />} />
          </Routes>
        </Layout>
      </div>
    </CartProvider>
  );
}

export default App;
