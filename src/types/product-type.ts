export type Product = {
  id: string | number;
  name: string;
  descripcion: string;
  price: number;
  img: string;
};

export type newProduct = Omit<Product, "id">;