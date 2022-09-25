import React from "react";
import Search from "../../Components/Search/Search";
import Select from "../../Components/Select/Select";
import { productSort } from "../../api/definitions";
import "./Products.css";
import { CgMenuGridR } from "react-icons/cg";
import { MdOutlineFormatListBulleted } from "react-icons/md";

const ProductFilters = ({ setSelectOption, selectOption, setRow }: any) => {
  return (
    <div className="products_filters">
      <div className="products_filters_icons_search">
        <div className="products_filters_icons">
          <MdOutlineFormatListBulleted onClick={() => setRow(false)} size={25} />
          <CgMenuGridR onClick={() => setRow(true)} size={25} />
        </div>
        <Search />
      </div>

      <Select placeholder="Sort" options={productSort} onChange={setSelectOption} value={selectOption} />
    </div>
  );
};

export default ProductFilters;
