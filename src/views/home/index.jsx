import "../../styles/home/header.scss";
import Header from "./heading";
import ProductCard from "./product-card";
import React from "react";
import useApiCall from "../../hooks/useApiCall";
export default function Home() {
  const { data, error, loading } = useApiCall(
    "https://api.noroff.dev/api/v1/online-shop"
  );

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>An error occurred: {error.message}</p>;
  }

  return (
    <main className="main-content">
      <Header />
      <div className="product-card-container">
        {data.map((item) => {
          return (
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
              rating={item.rating}
              reviews={item.reviews.length}
            />
          );
        })}
      </div>
    </main>
  );
}
