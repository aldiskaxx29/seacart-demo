// API.ts

import axios from "axios";
import { ProductProps } from "./type";


export const getProductHome = async (limit?: number): Promise<ProductProps[]> => {
  const res = await axios.get(
    "https://run.mocky.io/v3/0ba08f22-abdb-4a40-a1eb-663e6d4c34f3"
  );
  return res.data.data.products as ProductProps[];
};
