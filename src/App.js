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
import ScrollToTop from './components/ScrollToTop';

/**
 * Layout component that wraps the Header, Footer, and ScrollToTop components around its children.
 *
 * @param {Object} props - The props passed to the component.
 * @returns {JSX.Element} - The Layout component with Header, Footer, and ScrollToTop components.
 */
function Layout(props) {
  return (
    <>
      <Header />
      <ScrollToTop />
      {props.children}
      <Footer />
    </>
  )
}

/**
 * App component that sets up the CartProvider, routes, and Layout.
 *
 * @returns {JSX.Element} - The App component with CartProvider and Routes.
 */
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
