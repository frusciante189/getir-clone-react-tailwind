import React from "react";

const Product = ({ product }) => {
  return (
    <div className="bg-white flex flex-col items-center text-center space-y-1 p-3 relative">
      <button className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center border border-gray-200 rounded-lg shadow-md">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="#5d3ebc"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
      <img src={product.image} alt="" />
      <div className="text-sm font-semibold text-getir-secondary">
        {product.price}
      </div>
      <div className="text-sm font-semibold">{product.title}</div>
      <div className="text-sm text-gray-500">{product.alt}</div>
    </div>
  );
};

export default Product;
