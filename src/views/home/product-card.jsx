import "../../styles/home/product-card.scss";
import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard(props) {
  const rating = Math.round(props.rating);
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
    <div key={props.id} className="card">
      <Link to={`/product/${props.id}`}>
        <img src={props.img} alt={props.title} />
      </Link>

      <div className="card-info">
        <h2>{props.title}</h2>
        <div>
          {stars} ({props.reviews})
        </div>
        <p className="price">{props.price}</p>
        <button className="button">View Product</button>
      </div>
    </div>
  );
}
