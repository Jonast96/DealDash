import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useApiCall from "../../hooks/useApiCall";
import "../../styles/singleItem/singleItemCard.scss";
import { CartContext } from "../../components/Cart";
import Reviews from "./reviews";
import LoadingPage from "../../components/Loader";
import savedAmountCalculator from "../../components/savedAmountCalculator";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

/**
 * SingleItem component displays detailed information about a specific product.
 *
 * @returns {JSX.Element} - The SingleItem component with product information, ratings, reviews, and an "Add to cart" button.
 */
export default function SingleItem() {
  const params = useParams();
  const { data, error, loading } = useApiCall(
    `https://api.noroff.dev/api/v1/online-shop/${params.id}`
  );
  console.log(data);

  const { addToCart } = useContext(CartContext);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  function Test() {
    return (
      <div className="popup">
        <p className="title">{data.title} </p>
        <p>has been added to your cart</p>
      </div>
    );
  }

  const notify = () => toast(<Test />);
  const rating = Math.round(data.rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(
        <span key={i} className="star">
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="star">
          &#9734;
        </span>
      );
    }
  }

  const savedAmount = savedAmountCalculator(data.price, data.discountedPrice);

  return (
    <main className="main-content singleItem">
      <div className="singleItemMain">
        <h2 className="mobileTitle">{data.title}</h2>
        <div className="img-div">
          {data.price !== data.discountedPrice ? (
            <p className="discount">SAVE {savedAmount.toFixed(2)},-</p>
          ) : (
            ""
          )}
          <img className="img" src={data.imageUrl} alt={data.imageUrl}></img>
        </div>
        <div>
          <div className="starsPrice">
            <div>
              <h2 className="desktopTitle">{data.title}</h2>
            </div>
            <div className="">
              {stars} ({data.reviews.length})
            </div>
          </div>
          <div className="price ">
            {data.discountedPrice === data.price ? (
              `${data.price},-`
            ) : (
              <span>
                {data.discountedPrice},-{" "}
                <span className="original-price">{data.price},-</span>
              </span>
            )}
          </div>
          <p>{data.description}</p>
          <button
            onClick={() => {
              addToCart(data);
              notify();
            }}
            className="button"
          >
            Add to cart
          </button>
          <ToastContainer
            position="top-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            closeButton={false}
          />

          <div className="reviews">
            <h3>Reviews</h3>
            <Reviews data={data} />
          </div>
        </div>
      </div>
    </main>
  );
}
