const http = require("http"),
  fs = require("fs"),
  file = `${__dirname}/requests.log`;

function transformDataObjectToJson(data) {
  return `${JSON.stringify(data, null, 2)}\n`;
}

function logRequest(data) {
  // Write your code here
  fs.appendFileSync(file, transformDataObjectToJson(data), err => {
    if (err) {
      throw err;
    }
  });
}

http.createServer((req, res) => {
  const data = {
    url: req.url,
    headers: req.headers,
    ip: req.connection.remoteAddress,
    timestamp: new Date().toISOString()
  };

  console.log(`Request received for ${req.url}`);
  logRequest(data);
  res.writeHead(200, {"Content-Type": "application/json"});
  res.end(transformDataObjectToJson(data));
  console.log("Listo!");
}).listen(8000);