import { Link } from "react-router-dom";
import "../../styles/cart/summary.scss";

export default function Summary(props) {
  function calculateTotal(cart) {
    const prices = cart.map((item) => {
      return item.discountedPrice === item.price
        ? item.price
        : item.discountedPrice;
    });
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
      total += prices[i];
    }
    return total.toFixed(2);
  }

  return (
    <div className="summary">
      <h2>{props.title}</h2>

      <div className="subtotalContainer">
        <div className="subtotal">
          <p>Subtotal:</p>
          <p>{calculateTotal(props.cart)},-</p>
        </div>
        <div className="shipping">
          <p>Shipping:</p>
          <p>Free</p>
        </div>
      </div>
      <div className="totalContainer">
        <p className="total">Total:</p>
        <p>{calculateTotal(props.cart)},-</p>
      </div>
      <Link to={props.linkTo}>
        <button
          type={props.buttonType}
          className="checkoutButton"
          onClick={props.onButtonClick}
        >
          {props.buttonName}
        </button>
      </Link>
    </div>
  );
}
