const http = require("http"),
  url = "http://ws.geeklab.com.ar/dolar/get-dolar-json.php";

function getDollarPriceData() {

  return new Promise((resolve, reject) => {
    http.get(url, (resp) => {
    
      let data = "";
  
      resp.on("data", (chunk) => {
        data += chunk;
      });
  
      resp.on("end", () => {
        let json = null;
  
        try {
          json = JSON.parse(data);
          resolve(json);
        } catch (err) {
          reject(err);
        }
      });
  
    }).on("error", reject);
  });
}

function calculateConversion(amount) {
  return getDollarPriceData()
    .then((data) => {
      return (
        {
          pesos: amount,
          dolar: data.libre,
          conversion: Math.round(amount / data.libre * 100) / 100
        });
    });
}

calculateConversion(1000)
  .then(data => {
    console.log(`Cotización actual: AR$${data.dolar} = 1 Dolar`);
    console.log(`La cantidad de '${data.pesos}' pesos equivalen actualmente a '${data.conversion}' dolares!`);
  })
  .catch(err => console.error("Error!!!! :: ", err));
  