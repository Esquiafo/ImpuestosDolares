var dolar = 80.03 //Proxima API

function compraexterior(input) {
    let result = input * dolar;
    result = result + (result * 30/100);
    return result
}