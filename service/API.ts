// API.ts

import axios from "axios";
import { ArticleProps, CategoriesProps, GalleryProps, ProductProps } from "./type";


export const getProductHome = async (limit?: number): Promise<ProductProps[]> => {
  const res = await axios.get("https://api.seacart.id/api/products");
  return res.data.data.products as ProductProps[];
};

export const getProductDetail = async ( id: any): Promise<ProductProps> => {
  const res = await axios.get(`https://api.seacart.id/api/products/${id}`);
  return res.data.data as ProductProps;
};

export const getGalleryHome = async (limit?: 100): Promise<GalleryProps[]> => {
  const res = await axios.get("https://api.seacart.id/api/galleries?limit=20");
  return res.data.data.galleries as GalleryProps[];
};

export const getArticles = async (limit?: number, page?: number): Promise<ArticleProps[]> => {
  const res = await axios.get(`https://api.seacart.id/api/articles?limit=1000`);
  return res.data.data.articles as ArticleProps[];
};

export const getArticleCategories = async (limit?: number): Promise<CategoriesProps[]> => {
  const res = await axios.get("https://api.seacart.id/api/categories");
  return res.data.data as CategoriesProps[];
};

export const getArticleDetail = async (id: any): Promise<ArticleProps> => {
  const res = await axios.get(`https://api.seacart.id/api/articles/${id}`);
  return res.data.data as ArticleProps;
};