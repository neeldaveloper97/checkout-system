import { IProduct } from "../types/IProduct";

export const dummyProducts: IProduct[] = [
  {
    id: 1,
    productName: "Fruit tea",
    productPrice: 3.11,
    discount: "Buy one get one",
    productImage:
      "https://img.freepik.com/free-photo/fruit-infused-water-with-herbal-tea-oranges-lemons-limes-teapot-plaster-surface_176474-6372.jpg",
  },
  {
    id: 2,
    productName: "Strawberries",
    discount: "Buy 3 and more at 4.50 € per unit",
    productPrice: 5.0,
    productImage:
      "https://hips.hearstapps.com/countryliving/assets/15/22/1432664914-strawberry-facts1.jpg",
  },
  {
    id: 3,
    productName: "Coffee",
    discount: null,
    productPrice: 11.23,
    productImage:
      "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29mZmVlfGVufDB8fDB8fHww",
  },
];
