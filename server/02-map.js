const letters = [`a`, `b`, `c`];

const newArray = letters.map(item => item + `++`);
// const newArray = [];
// for (let index = 0; index < letters.length; index++) {
//     const element = letters[index];
//     newArray.push(element + `++`);
// }
console.log(`Original: ${letters}`);
console.log(`New: ${newArray}`);

const listaProductos = [
    {
      name: "Product 1",
      price: 1000,
      stock: 10
    },
    {
      name: "Product 2",
      price: 2000,
      stock: 20
    },
   
  ];

function solution() {
  const arraySolution = listaProductos.map(item => item *  {
    taxes: parseInt((listaProductos[1]*0.19)),
});
    return arraySolution;
}; 




  console.log(solution());


