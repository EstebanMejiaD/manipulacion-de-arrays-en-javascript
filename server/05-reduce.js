const totals = [1,2,3,4,];



function sumaTotals (array) {
    let sum = 0;
    for (let index = 0; index < totals.length; index++) {
        const element = totals[index];
        sum = sum + element;
    }
    return sum;
}

console.log(sumaTotals(totals));


function sumaTotalsReduce(arr) {
    const rta = totals.reduce((sum, item) => sum +  item, 0); 
    return rta;
}

console.log(`sumaTotalsReduce: ${sumaTotalsReduce(totals)}`);