var dolar = 80.03

function puertapuerta(input) {
    let overprice = 49.99;
    let result = 0
    if (input>overprice) {
        let diff = input - 50;
        diff = diff * 50/100;
        result = input + diff;
        }
    else{
        result = input
    }
    result = result * dolar;
    result = result + (result * 30/100);
    return result
}


function compraexterior(input) {
    let result = input * dolar;
    result = result + (result * 30/100);
    return result
}

console.log(puertapuerta(140))
console.log(compraexterior(140))