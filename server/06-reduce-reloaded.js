

const items = [1,3,2,3,3,1,10];

function histogramaDeNumeros(arr) {
    const rta = items.reduce((obj, item) => {
        if (!obj[item]) {
           obj[item] = 1;
        } else {
           obj[item] = obj[item] + 1;
        }
        return obj;
       },  {});
       return rta;
}

console.log(histogramaDeNumeros(items));


const data = [
    {
        name: `Nicolas`,
        level: `low`,
    },
    {
        name: `Andrea`,
        level: `medium`,
    },
    {
        name: `Zulema`,
        level: `hight`,
    },
    {
        name: `Santiago`,
        level: `low`,
    },
    {
        name: `Lucia`,
        level: `hight`,
    },
];

function histogramaDeObjetos(arr) {
    const rta = data
    .map(item => item.level)
    .reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 1;
        } else {
            obj[item] += obj[item];
        }
        return obj;
    },  {});
    return rta;
}

console.log(histogramaDeObjetos(data));



