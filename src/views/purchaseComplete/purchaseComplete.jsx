import checkMark from "../../media/check.jpg";
import { Link } from "react-router-dom";

export default function PurchaseComplete() {
  return (
    <main className="main-content ">
      <div className="emptyCart">
        <img src={checkMark} alt="" />
        <h1>Purchase complete</h1>
        <p>Thank you for your purchase from DealDash!</p>
        <p>
          Your order has been successfully processed and is on its way. You will
          receive a confirmation email shortly. If you have any questions, our
          customer service team is here to assist you. We appreciate your
          business and hope to see you again soon!
        </p>
        <Link to={"/"}>
          <button>Browse items</button>
        </Link>
      </div>
    </main>
  );
}
