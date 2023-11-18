export interface ProductProps {
  id: number;
  name: string;
  short_description: string;
  description: string;
  images_url: string[];
  sub_products: {
    name: string;
    image_url: string;
    weight: string;
    type: string;
    wrap: string;
  }[];
}
