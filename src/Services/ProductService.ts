import { Product } from "../Components/Products/product";

export const getProducts = () => {
  
   const apiUrl = 'https://localhost:9001/Products';
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
  
}

export const functionCall = () => {
  console.log("testing jest");

}