const fetch = require("node-fetch");

fetch(
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales&fbclid=IwAR2D0s0YxybkA9VS1QRpHbrg93DY9QMNgBKAv2ehRMwTGpP0opob055xlg0"
  )
    .then((res) => res.json())
    .then((res) => {
      const { compra, venta, nombre } = res[0].casa;
        
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
        result = result * parseFloat(venta.replace(/,/g, ".")).toFixed(2);
        result = result + (result * 30/100);
        return result + 190
    }
    console.log(puertapuerta(100))
    });