import React, { useState, useEffect } from "react";
import "./Products.css";
import axios from "axios";
import { categoriesApi, productsApi } from "../../api/definitions";
import ProductItem from "../../Components/ProductItem/ProductItem";
import { iProduct } from "../../definitions/Products";
import ProductFilters from "./ProductFilters";
import ProductRow from "../../Components/ProductRow/ProductRow";
import ProductsSidebar from "../../Components/ProductsSidebar/ProductsSidebar";

const Products = () => {
  const [products, setProducts] = useState([{} as iProduct]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [error, setError] = useState([] as [] | [string]);
  const [selectOption, setSelectOption] = useState("" as string);
  const [row, setRow] = useState(false);

  const setErrorHandler = (errorMessage: string) => {
    setError([errorMessage]);
    setTimeout(() => {
      setError([]);
    }, 3000);
  };

  const getProducts = (option: object) => {
    setLoading(true);
    axios
      .get(productsApi, {
        params: {
          ...option,
        },
      })
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setErrorHandler(error);
      });
  };

  const getProductCategories = () => {
    setLoading(true);
    axios
      .get(categoriesApi)
      .then((res) => {
        console.log(res.data);
        setCategories(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        setErrorHandler(error.response.data.error);
      });
  };

  useEffect(() => {
    getProducts({});
    getProductCategories();
  }, []);

  return (
    <div className="products_page">
      <ProductsSidebar
        categories={categories}
        getProducts={getProducts}
        setSelectedSubcategory={setSelectedSubcategory}
        selectedSubcategory={selectedSubcategory}
      />
      <div className="products_page_container">
        <ProductFilters setRow={setRow} setSelectOption={setSelectOption} selectOption={selectOption} />
        <div className="products">
          {!loading &&
            products.map((item) => {
              return row ? <ProductItem key={item._id} {...item} /> : <ProductRow key={item._id} {...item} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Products;
