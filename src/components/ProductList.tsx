import React from "react";
import Product from "./Product";
import { dummyProducts } from "../constants/dummy-products";
import { IProduct } from "../types/IProduct";

interface ProductListProps {
  addToCart: (product: IProduct) => void;
}

function ProductList({ addToCart }: ProductListProps) {
  return (
    <div className="w-full md:w-2/3 pr-4">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {dummyProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
