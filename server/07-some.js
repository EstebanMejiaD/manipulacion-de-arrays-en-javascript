const numbers = [1,2,3,4];


function esDivisible(arr){
    let respuesta = false;
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element % 2 === 0) {
            respuesta = true;
            break;
        }
    }
    return respuesta;
}
console.log(esDivisible(numbers));


function esDivisibleSome(arr) {
    const rta = arr.some(item => item % 2 === 0);
    return rta;
}

console.log(esDivisibleSome(numbers));


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

function ordenEntregadaSome(arr) {
    const rta = arr.some(item => item.delivered);
    return rta;
}
console.log(ordenEntregadaSome(orders));




const dates = [
    {
        startDate: new Date(2021, 1, 1, 10),
        endDate: new Date(2021, 1, 1, 11),
        title: `Cita de trabajo`,
    },
    {
        startDate: new Date(2021, 1, 1, 15),
        endDate: new Date(2021, 1, 15, 30),
        title: `Cita con mi jefe`,
    },
    {
        startDate: new Date(2021, 1, 1, 20),
        endDate: new Date(2021, 1, 15, 21),
        title: `Cena`,
    },
];

const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),
    endDate: new Date(2021, 1, 9, 30),
    title: `Cita de trabajo`,
};
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping')

const isOverlap = (newDate) => {
    return dates.some(date => {
        return areIntervalsOverlapping(
            {start: date.startDate, end: date.endDate, },
            {start: newDate.startDate, end: newDate.endDate, },
        )
    });
}

console.log(`Se sobrepone: ${isOverlap(newAppointment)}`);

