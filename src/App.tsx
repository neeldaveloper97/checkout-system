import { useState } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import { ICart } from "./types/ICart";
import React from "react";
import { IProduct } from "./types/IProduct";

function App() {
  const [cart, setCart] = useState<ICart[]>([]);

  const addToCart = (product: IProduct) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity === 0) {
      setCart(cart.filter((item) => item.id !== id));
    } else {
      setCart(
        cart.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row">
        <ProductList addToCart={addToCart} />
        <Cart cart={cart} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
}

export default App;
