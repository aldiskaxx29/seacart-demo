export interface ProductProps {
  id: number;
  name: string;
  short_description: string;
  description: string;
  images_url: string[];
  featured_image: string;
  sub_products: {
    name: string;
    image_url: string;
    weight: string;
    type: string;
    wrap: string;
  }[];
}
export interface GalleryProps {
  id: number;
  filename: string;
}

export interface ArticlePropsMaps {
  key: number;
  id: any;
  image_url: string;
  category: string;
  title: string;
  content: string;
  writer_url: string;
  writer_name: string;
  date: string;
}

export interface ArticleProps {
  id: any;
  image_url: string;
  category: string;
  short_description: string;
  title: string;
  content: string;
  updated_at: string;
}

export interface ArticlePropsOne {
  id: any;
  image_url: string;
  category: string;
  short_description: string;
  title: string;
  content: string;
  updated_at: string;
  writer_name: string;
  writer_url: string;
}


export interface EmployeeProps {
  id: any;
  url: string;
  name: string;
  position: string;
}

export interface CategoriesProps {
  categories: string[];
}