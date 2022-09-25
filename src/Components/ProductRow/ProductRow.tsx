import React from "react";
import "./ProductRow.css";
import { routeUrl } from "../../api/definitions";
import { iProduct } from "../../definitions/Products";

const ProductRow = ({ name, category, subcategory, images, price }: iProduct) => {
  return (
    <div className="productRow">
      <div className="productRow_container">
        <img src={`${routeUrl}public/productImages/${images[0]}`} alt="productImage" />
        <div className="productRow_info">
          <p>Name: {name}</p>
          <p>Price: {price} €</p>
        </div>
      </div>
    </div>
  );
};

export default ProductRow;
