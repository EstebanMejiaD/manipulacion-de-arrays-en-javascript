


const letters = [`a`, `b`, `c`];

for (let index = 0; index < letters.length; index++) {
    const element = letters[index];
    console.log(`for`, element); 
}
//forEach()
letters.forEach(item => console.log(`forEach`, item));


const listaNumeros = [2, 4, 5, 6];

let multiplicado = listaNumeros.map(function(listaNumeros) {
	const resultado = (listaNumeros)*2;
   
	return resultado;
}); 

console.log(multiplicado);