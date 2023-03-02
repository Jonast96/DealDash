import "../../styles/home/header.scss"
import Header from "./header"
import ProductCard from "./product-card"
import React from "react"
export default function Home () {
    const [productList, setProductList] = React.useState([])
    React.useEffect(()=> {
        fetch('https://api.noroff.dev/api/v1/online-shop')
        .then(response => response.json())
        .then(data => {
          setProductList(data)
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
      
    }, [])
    console.log(productList)
    

    return(
            <div className="main-content">
                <Header/>
                <div className="product-card-container">
                    {productList.map((item)=> {
                        return (
                            <ProductCard 
                            key={item.id}
                            img={item.imageUrl}
                            title={item.title}
                            price={
                                item.discountedPrice === item.price
                                  ? `${item.price},-`
                                  : (
                                    <span>
                                      {item.discountedPrice},- <span className="original-price">{item.price},-</span>
                                    </span>
                                  )
                              }
                              rating={item.rating}
                              reviews={item.reviews.length}
                              
    />
                        )
                    })}
                </div>
            </div>
    )
}