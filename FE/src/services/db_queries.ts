import axios from "axios";
import { apiBaseUrl } from "../constants";

import {
  Brand,
  // Product_Category,
  Variant,
  Variant_Category,
  Product,
  Product_Category_WO_Children,
} from "@/types";

const getAll_Products = async () => {
  const { data } = await axios.get<Product[]>(`${apiBaseUrl}/products`);
  return data;
};

const getAll_Brands = async () => {
  const { data } = await axios.get<Brand[]>(`${apiBaseUrl}/brands`);
  return data;
};

const getAll_Variants = async () => {
  const { data } = await axios.get<Variant[]>(`${apiBaseUrl}/variants`);
  return data;
};

const getAll_VariantCategories = async () => {
  const { data } = await axios.get<Variant_Category[]>(
    `${apiBaseUrl}/variant-categories`
  );
  return data;
};

const getAll_ProductCategories = async () => {
  const { data } = await axios.get<Product_Category_WO_Children[]>(
    `${apiBaseUrl}/product-categories`
  );

  return data;
};

const queryService = {
  getAll_Products,
  getAll_ProductCategories,
  getAll_Brands,
  getAll_Variants,
  getAll_VariantCategories,
};

export default queryService;
