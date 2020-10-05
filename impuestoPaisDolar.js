
const fetch = require("node-fetch");

fetch(
    "https://www.dolarsi.com/api/api.php?type=valoresprincipales&fbclid=IwAR2D0s0YxybkA9VS1QRpHbrg93DY9QMNgBKAv2ehRMwTGpP0opob055xlg0"
  )
    .then((res) => res.json())
    .then((res) => {
      const { compra, venta, nombre } = res[0].casa;

      function compraexterior(input) {
        let result = input * parseFloat(venta.replace(/,/g, ".")).toFixed(2);;
        result = result + (result * 30/100) + (result * 35/100);
        return result
    }
      

    console.log(compraexterior(2.397))
    });
