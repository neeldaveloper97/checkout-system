import React from "react";
import CartItem from "./CartItem";
import { calculateTotalPrice } from "../utils";
import { ICart } from "../types/ICart";

interface CartProps {
  cart: ICart[];
  updateQuantity: (id: number, quantity: number) => void;
}

function Cart({ cart, updateQuantity }: CartProps) {
  const totalPrice = calculateTotalPrice(cart);

  return (
    <div className="w-full md:w-1/3 mt-4 md:mt-0">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <CartItem
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
            />
          ))}
          <div className="mt-4 text-xl font-bold">
            Total: €{totalPrice.toFixed(2)}
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
