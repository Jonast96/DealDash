import "../../styles/cart/emptyCart.scss";
import cart from "../../media/emptyCart.png";
import { Link } from "react-router-dom";

/**
 * EmptyCart component that displays a message when the user's cart is empty
 * @returns {JSX.Element} EmptyCart component
 */
export default function EmptyCart() {
  return (
    <main className="main-content">
      <div className="emptyCart">
        <img src={cart} alt="Empty cart" />
        <h1>Your cart is empty</h1>
        <p>We're sorry, but it looks like your cart is empty.</p>
        <p>
          If you have any questions or need help finding a specific product, our
          friendly and knowledgeable customer service team is always here to
          assist you. We appreciate your interest in DealDash and hope to see
          you soon!
        </p>
        <Link to={"/"}>
          <button>Browse items</button>
        </Link>
      </div>
    </main>
  );
}
