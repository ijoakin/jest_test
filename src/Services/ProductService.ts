
export const getProducts = () => {
   const apiUrl = 'https://localhost:5001/Products';
     return fetch(apiUrl,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }
        })
        .then(res => res.json())
        .then((response) => response);
        //.then((data) => console.log('This is your data', data));
}