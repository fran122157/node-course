const countryInfo = require("../exercises/country-info");

// consume here the module!
countryInfo.getCountryInfo("AR", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});
countryInfo.getCountryInfoByName("Argentina", (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});