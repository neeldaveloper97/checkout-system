import React from "react";
import { IProduct } from "../types/IProduct";
import Button from "./button";

interface ProductProps {
  product: IProduct;
  addToCart: (product: IProduct) => void;
}

function Product({ product, addToCart }: ProductProps) {
  return (
    <div className="border p-4 rounded-lg shadow bg-white items-center">
      <div className="relative">
        {product.discount && (
          <div className="absolute left-2 top-2">
            <span className="text-red-600 bg-white shadow-xl rounded-full px-2 py-1 text-xs font-bold">
              {product.discount}
            </span>
          </div>
        )}
        <img
          src={product.productImage}
          className="w-full h-56 rounded-lg"
          alt=""
        />
      </div>

      <div className="items-start mt-4">
        <h3 className="text-lg font-semibold">{product.productName}</h3>
        <p className="text-green-600 font-bold">
          {product.productPrice.toFixed(2)} €
        </p>
        <div className="flex mt-4">
          <Button label="Add to Cart" onClick={() => addToCart(product)} />
        </div>
      </div>
    </div>
  );
}

export default Product;
