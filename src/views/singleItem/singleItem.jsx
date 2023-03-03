import React from "react";
import { useParams } from "react-router-dom";
import useApiCall from "../../components/apiHook";
import "../../styles/singleItem/singleItemCard.scss";

export default function SingleItem() {
  const params = useParams();
  const { data, error, loading } = useApiCall(
    `https://api.noroff.dev/api/v1/online-shop/${params.id}`
  );
  console.log(data);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  function Reviews() {
    const [reviews, setReviews] = React.useState(data.reviews);

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

    console.log(reviews);
    return reviews.length ? (
      reviews.map((review) => {
        return (
          <div key={review.id} className="review">
            <div className="starsName">
              <p className="name">{review.username}</p>
              <div className="starDiv">
                {stars} ({data.reviews.length})
              </div>
            </div>
            <p>{review.description}</p>
          </div>
        );
      })
    ) : (
      <div>There are currently no reviews for this product</div>
    );
  }

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

  return (
    <main className="main-content singleItem">
      <div className="singleItemMain">
        <h2 className="mobileTitle">{data.title}</h2>
        <div className="img-div">
          <img src={data.imageUrl} alt={data.imageUrl}></img>
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
          <button className="button">Add to cart</button>
          <div className="reviews">
            <h3>Reviews</h3>
            <Reviews />
          </div>
        </div>
      </div>
    </main>
  );
}
