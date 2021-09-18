import React from "react";

const Category = ({ category: { id, title, image } }) => {
  return (
    <a
      href="/"
      className="flex flex-col items-center justify-center text-center space-y-2 hover:bg-purple-50 group min-h-[108.8px] w-full"
    >
      <img
        src={image}
        alt=""
        className="rounded-md w-12 h-12 border border-gray-200"
      />
      <span className="text-sm font-semibold text-gray-700 group-hover:text-getir-secondary leading-4 tracking-tight whitespace-nowrap">
        {title}
      </span>
    </a>
  );
};

export default Category;
