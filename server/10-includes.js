

const pets = [`cat`, `dog`, `bat`];
let exist = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element ===`cat`) {
        exist = true;
        break;
    }
}

console.log(`for`, exist);
// El metodo arra.includes(``); solo recibe como- 
//parametro el elemento, no un array function
function existInArray(arr) {
    const rta = arr.includes(`bat`);
    return rta;
}
console.log(`incluid`, existInArray(pets));

