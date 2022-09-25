export interface iProduct {
  _id: string;
  name: string;
  description: string;
  dateCreated: string;
  category: string;
  subcategory: string;
  quantity: number;
  price: number;
  purchasePrice: number;
  published: boolean;
  images: [string];
}

export interface iProductSort {
  value: string;
  label: string;
}
