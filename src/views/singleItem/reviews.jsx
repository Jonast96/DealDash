// import React from "react";

// export default function Reviews(data) {
//   const [reviews, setReviews] = React.useState(data.reviews);

//   const rating = Math.round(data.rating);
//   const stars = [];
//   for (let i = 0; i < 5; i++) {
//     if (i < rating) {
//       stars.push(
//         <span key={i} className="star">
//           &#9733;
//         </span>
//       );
//     } else {
//       stars.push(
//         <span key={i} className="star">
//           &#9734;
//         </span>
//       );
//     }
//   }

//   console.log(reviews);
//   return reviews.length ? (
//     reviews.map((review) => {
//       return (
//         <div key={review.id} className="review">
//           <div className="starsName">
//             <p className="name">{review.username}</p>
//             <div className="starDiv">
//               {stars} ({data.reviews.length})
//             </div>
//           </div>
//           <p>{review.description}</p>
//         </div>
//       );
//     })
//   ) : (
//     <div>There are currently no reviews for this product</div>
//   );
// }
