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

  return (
    <main className="main-content singleItem">
      <div className="singleItemMain">
        <h2 className="mobileTitle">{data.title}</h2>
        <div className="img-div">
          <img src={data.imageUrl}></img>
        </div>
        <div>
          <div className="starsPrice">
            <div>
              <h2 className="desktopTitle">{data.title}</h2>
            </div>
            <div className="">
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>
              <span className="star">&#9733;</span>({data.reviews.length})
            </div>
            <div className="price ">{data.price},-</div>
          </div>
          <p>{data.description}</p>
          <button className="button">Add to cart</button>
          <div className="reviews">
            <h3>Reviews</h3>
            <div className="review">
              <div className="starsName">
                <p className="name">Ola N</p>
                <div className="starDiv">
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                  <span className="star">&#9733;</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                placeat natus consectetur corporis debitis magni necessitatibus,
                ea totam explicabo? Eos, veniam voluptatibus. Dolore unde animi
                nobis placeat dignissimos impedit corrupti.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
