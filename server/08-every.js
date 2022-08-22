


const numbers = [1,30,49,29,10,13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >=40) {
        rta = false;
    }
}

console.log(`for `,rta);

function cumplenLaCondicion(arr) {
    const rta = arr.every(item => item <= 40);
    return rta;
}

console.log(cumplenLaCondicion(numbers));