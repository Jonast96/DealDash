import React from "react";

import "../../styles/singleItem/singleItemCard.scss";

/**
 * Reviews component displays a list of reviews for a single product.
 *
 * @param {Object} props - The properties passed to the Reviews component.
 * @param {Object} props.data - The data object containing product information.
 * @param {Array} props.data.reviews - The array of review objects for the product.
 * @param {number} props.data.rating - The average rating of the product.
 * @returns {JSX.Element} - The Reviews component with a list of reviews or a message if no reviews are available.
 */
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
