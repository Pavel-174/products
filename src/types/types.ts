export interface Product {
  id?: string;
  packsNumber: number;
  packageType: string;
  isArchived: boolean;
  description?: string;
  createdAt?: string;
}
  
export interface ProductsState {
  products: Product[];
}

export interface ProductInfoState {
  productInfo: Product;
}
