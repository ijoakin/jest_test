import { Product } from "../Components/Products/product";

export const getProducts = () => {
  
   const apiUrl = 'https://localhost:5001/Products';
     return fetch(apiUrl,
        {
          method: 'GET',
          mode: "cors",
          headers: {
            'Content-Type': 'application/json'           
          }
        })
        .then(res => res.json())
        .then((response) => response);
        
  // return new Promise<Product[]>(() => {
  //   const arr: Product[] =[
  //     {
  //       description: "description",
  //       id: 10,
  //       price: 25,
  //     },
  //     {
  //       description: "description2",
  //       id: 11,
  //       price: 25,
  //     },
  //     {
  //       description: "description3",
  //       id: 12,
  //       price: 25,
  //     },
  //     {
  //       description: "description4",
  //       id: 13,
  //       price: 25,
  //     },
  //   ];

  //   return arr;
  // });
}

