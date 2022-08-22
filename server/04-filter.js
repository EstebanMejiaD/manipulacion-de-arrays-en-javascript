const words = [`spray`, `limit`, `elite`, `exuberant`];


const newArray = [];
for (let index = 0; index < words.length; index++) {
    const item = words[index];
    if(item.length >=6) {
        newArray.push(item);
    }
}

console.log(newArray, "newArray");
console.log(words, "words");

const rta = words.filter(item => item.length >=6);
console.log(rta, "rta");
console.log(words, "words");




const orders = [
    {
        customerName: `Nicolas`,
        total: 60,
        delivered: true,
    },
    {
        customerName: `Zulema`,
        total: 120,
        delivered: false,
    },
    {
        customerName: `Santiago`,
        total: 180,
        delivered: true,
    },
    {
        customerName: `Valentina`,
        total: 240,
        delivered: true,
    },
    {
        customerName: `Nicolasa`,
        total: 240,
        delivered: true,
    },
];

const respuesta = orders.filter(item => item.delivered == true && item.total >=100);

console.log(respuesta, "respuesta");
console.log(orders, "orders");

const search = (query) => {
    return orders.filter(item =>{
        return item.customerName.includes(query);
    })
}

console.log(search(`Nico`));


// reto devolver una array que su elemento tenga valor de 4 o mas letras
function solution(array) {
	const rta = array.filter(item => item.length >= 4)
	return rta;
}; 

const arrayList = [`amor`, `sol`, `piedra`, `día`];
const respuestaArray = solution(arrayList);


console.log(respuestaArray);