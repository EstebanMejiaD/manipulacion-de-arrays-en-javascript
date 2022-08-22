const elements =[`Fire`, `Air`, `Water`];

let rtaFinal = ``;
const separator = `--`;
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}

console.log(rtaFinal);

function unirSeparador(arr) {
    const rta = arr.join(`--`);
    return rta;
}
console.log(unirSeparador(elements));