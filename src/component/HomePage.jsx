import React, { useState, useEffect } from "react";
import ImageCart1 from "/public/cart-01.jpg";
import ImageCart2 from "/public/cart-02.jpg";
import ImageCart3 from "/public/cart-03.jpg";
import ImageDetail1 from "/public/details-1.jpg";
import ImageDetail2 from "/public/details-2.jpg";
import ImageDetail3 from "/public/details-3.jpg";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product) => (
          <div
            className="flex flex-col justify-between shadow w-full bg-gray-50 rounded-md"
            key={product.id}
          >
            <div>
              <img
                className="w-full h-40 object-cover object-center "
                src={product.image}
                alt="photo"
              />
            </div>
            <p className="pb-2 text-orange-800">{product.title}</p>
            <p>{product.price}$</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomePage;
