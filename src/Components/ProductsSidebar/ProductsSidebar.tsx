import React from "react";
import "./ProductsSidebar.css";
import Category from "./Category";

const ProductsSidebar = ({ categories, getProducts, setSelectedSubcategory, selectedSubcategory }: any) => {
  return (
    <div className="products_sidebar">
      <div className="products_sidebar_categoryList">
        <p
          onClick={() => {
            getProducts();
            setSelectedSubcategory("All Products");
          }}
        >
          All Products
        </p>
      </div>
      {categories.map((category: any) => {
        return (
          <Category
            key={category._id}
            category={category}
            getProducts={getProducts}
            setSelectedSubcategory={setSelectedSubcategory}
            selectedSubcategory={selectedSubcategory}
          />
        );
      })}
    </div>
  );
};

export default ProductsSidebar;
