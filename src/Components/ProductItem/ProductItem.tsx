import React from "react";
import "./ProductItem.css";
import { routeUrl } from "../../api/definitions";
import { iProduct } from "../../definitions/Products";

const ProductItem = ({ name, category, subcategory, images, price }: iProduct) => {
  return (
    <div className="productItem">
      <div className="productItem_container">
        <img src={`${routeUrl}public/productImages/${images[0]}`} alt="productImage" />
        <div className="productItem_info">
          <p>Name: {name}</p>
          <p>Price: {price} €</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
