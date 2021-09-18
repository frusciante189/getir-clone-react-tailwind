import React, { useState, useEffect } from "react";
import data from "../API/Favs.json";
import Product from "../UI/Product";

const Favorites = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => setProducts(data), []);
  return (
    <div className="container mx-auto">
      <h6 className="text-sm font-semibold text-getir-categories-title mb-2 mt-7 px-5 md:px-0">
        Favoriler
      </h6>
      <div className="grid xl:grid-cols-8 md:grid-cols-5 grid-cols-3 gap-0.1 bg-white rounded-lg overflow-hidden">
        {products &&
          products.map((product, index) => (
            <Product key={index} product={product} />
          ))}
      </div>
    </div>
  );
};

export default Favorites;
