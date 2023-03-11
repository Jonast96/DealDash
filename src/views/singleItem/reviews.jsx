import React from "react";

import "../../styles/singleItem/singleItemCard.scss";

export default function Reviews(props) {
  const reviews = props.data.reviews;
  console.log(reviews);
  const rating = Math.round(props.data.rating);
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

  return reviews.length ? (
    reviews.map((review) => {
      return (
        <div key={review.id} className="review">
          <div className="starsName">
            <p className="name">{review.username}</p>
            <div className="starDiv">
              {stars} ({props.data.reviews.length})
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
