import { HiArrowUp } from "react-icons/hi";

// eslint-disable-next-line no-unused-vars
const local = "http://localhost:80/";
const test = "http://192.168.0.14:80/";
export const routeUrl = local;

export const loginApi = routeUrl;
export const ordersApi = routeUrl + "orders/";
export const clientsApi = routeUrl + "clients/";
export const categoriesApi = routeUrl + "categories/";
export const productsApi = routeUrl + "products/";

export const productSort = [
  { label: "Price ↑", value: "priceAscending" },
  { label: "Price ↓", value: "priceDessending" },
  { label: "Quantity ↓", value: "quantityDessending" },
  { label: "Quantity ↓", value: "quantityDessending" },
  { label: "Name ↓", value: "nameDessending" },
  { label: "Name ↓", value: "nameDessending" },
];
