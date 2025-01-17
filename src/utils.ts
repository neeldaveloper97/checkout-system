import { ICart } from "./types/ICart";

export function calculateItemPrice(cart: ICart) {
  switch (cart.id) {
    case 1: // For product Fruit tea
      return Math.ceil(cart.quantity / 2) * cart.productPrice;
    case 2: // For product Strawberries
      return cart.quantity >= 3
        ? cart.quantity * (cart.productPrice - 0.5)
        : cart.quantity * cart.productPrice;
    default:
      return cart.quantity * cart.productPrice;
  }
}

export function calculateTotalPrice(cart: ICart[]) {
  return cart.reduce((total, item) => total + calculateItemPrice(item), 0);
}
