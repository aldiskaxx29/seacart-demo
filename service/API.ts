// API.ts

import axios from "axios";
import { GalleryProps, ProductProps } from "./type";


export const getProductHome = async (limit?: number): Promise<ProductProps[]> => {
  const res = await axios.get("https://api.seacart.id/api/products");
  return res.data.data.products as ProductProps[];
};

export const getProductDetail = async ( id: any, limit?: number): Promise<ProductProps> => {
  const res = await axios.get(`https://api.seacart.id/api/products/${id}`);
  return res.data.data.products as ProductProps;
};

export const getGalleryHome = async (limit?: number): Promise<GalleryProps[]> => {
  const res = await axios.get("https://api.seacart.id/api/galleries");
  return res.data.data.galleries as GalleryProps[];
};
