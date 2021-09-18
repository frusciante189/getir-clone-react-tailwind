import React, { useState, useEffect } from "react";
import data from "../API/Categories.json";
import Category from "../UI/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(data);
  }, []);
  return (
    <div className="bg-white py-6">
      <div className="container mx-auto">
        <h6 className="text-sm font-semibold text-getir-categories-title mb-2 px-5 md:px-0">
          Kategoriler
        </h6>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10">
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
