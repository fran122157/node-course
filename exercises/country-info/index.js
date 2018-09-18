const fs = require("fs");

function getParsedJSON(filepath, finderFunc, cb) {

  fs.readFile(filepath, (err, data) => {
    if (err) {
      throw err;
    }

    const countries = JSON.parse(data),
      country = countries.find(finderFunc);
    cb(err, country);
  });

}

module.exports = {

  getCountryInfo(code, cb) {
    // write your code here!
    getParsedJSON(`${__dirname}/countries.json`, element => element.code === code, cb);
  },

  getCountryInfoByName(name, cb) {
    // write your code here!
    getParsedJSON(`${__dirname}/countries.json`, element => element.name === name, cb);
  }

};