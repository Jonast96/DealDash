import "../../styles/home/header.scss";
import React from "react";
import useApiCall from "../../hooks/useApiCall";
import LoadingPage from "../../components/Loader";
import ProductCard from "../home/product-card";
import "../../styles/deals/deals.scss";

export default function Deals() {
  const { data, error, loading } = useApiCall(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }
  return (
    <main className="main-content">
      <div className="on-sale-header">
        <h1 className="sale-title">Limited Time Offer!</h1>
        <p className="sale-text">
          Save up to 50% on select items. Don't miss out on these amazing deals!
        </p>
      </div>

      <div className="product-card-container">
        {data.map((item) =>
          item.price !== item.discountedPrice ? (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.imageUrl}
              title={item.title}
              price={
                item.discountedPrice === item.price ? (
                  `${item.price},-`
                ) : (
                  <span>
                    {item.discountedPrice},-{" "}
                    <span className="original-price">{item.price},-</span>
                  </span>
                )
              }
              originalPrice={item.price}
              discountedPrice={item.discountedPrice}
              rating={item.rating}
              reviews={item.reviews.length}
            />
          ) : null
        )}
      </div>
    </main>
  );
}
