


const numbers = [1,30,49,29,10,13];
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element ===30) {
        rta = element;
        break;
    }
}
console.log(`for `, rta);


function existeElemeto(arr) {
    const rta = arr.find(item => item === 30);
    return rta;
}

console.log(`find `,existeElemeto(numbers));



const products = [
    {
        name: `Pizza`,
        price: 12,
        id: 3,
    },
    {
        name: `Burger`,
        price: 20,
        id: 12,
    },
    {
        name: `Salchipapa`,
        price: 10,
        id: 22,
    },

];

function productExist(arr) {
    const rta = arr.map(item => item.id).find(item => item === 1);
    
    if (rta === undefined) {
        return `not exist`;
    }
    return rta;
}

console.log(`Id del producto: `, productExist(products));

function positionProduct(arr) {
    const rta = arr.findIndex(item => item.id === 22);
    
    if (rta === undefined) {
        return `not exist`;
    }
    return rta;
}
console.log(`La posicion del producto es: `, positionProduct(products));
