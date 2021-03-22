import { Product } from "../../Components/Products/product";


export const getProducts = () => {
  return new Promise(() => {
    console.log("is using the mock");
    return [
      {
        description: "description",
        id: 10,
        price: 25,
      },
      {
        description: "description2",
        id: 11,
        price: 25,
      },
      {
        description: "description3",
        id: 12,
        price: 25,
      },
      {
        description: "description4",
        id: 13,
        price: 25,
      },
    ];
  })
}