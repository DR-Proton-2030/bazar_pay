import { IProduct } from "../types/product.interface";

export interface ProductCardProps {
  title: string;
  buyingPrice: number;
  sellingPrice: number;
  stock: number;
  uri:string;
  product:IProduct
}
