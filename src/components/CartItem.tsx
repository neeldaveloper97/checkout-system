import React from "react";
import { calculateItemPrice } from "../utils";
import { ICart } from "../types/ICart";
import Button from "./button";

interface CartItemProps {
  item: ICart;
  updateQuantity: (id: number, quantity: number) => void;
}

function CartItem({ item, updateQuantity }: CartItemProps) {
  const itemPrice = calculateItemPrice(item);

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div className="flex flex-row items-center gap-x-4">
        <img src={item.productImage} className="w-12 h-12 rounded-lg" alt="" />
        <div>
          <h3 className="font-semibold">
            {item.productName} x {item.quantity}
          </h3>
          <p className="text-sm text-gray-600">€{itemPrice.toFixed(2)}</p>
        </div>
      </div>
      <div className="flex items-center">
        <Button
          label="-"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        />
        <span className="mx-2">{item.quantity}</span>
        <Button
          label="+"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        />
      </div>
    </div>
  );
}

export default CartItem;
