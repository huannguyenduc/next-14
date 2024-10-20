export interface ComboInterface {
  id: number;
  name: string;
  newPrice: number;
  oldPrice: number;
  image: string;
}

export interface ProductInterface {
  id: number;
  name: string;
  newPrice: number;
  oldPrice: number;
  image: string;
  rating: number;
  tags?: string[];
}

export interface GiftInterface {
  id: number;
  name: string;
  image: string;
  point: number;
}
