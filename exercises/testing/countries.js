// const countryInfo = require("../country-info");
// En lugar de incluír acá el módulo "country-info", fuerzo a que lo pasen por parámetro.
// Esto permite que sea fácilmente testeable ya que puedo pasar un objecto "mockeado" de countryInfo.
// Patrón: dependency injection, inversion of control.

module.exports = (countryInfo) => {

  function getByCode(code) {
    // Your promise code here!
    return new Promise((resolve, reject) => {
      countryInfo.getCountryInfo(code, (err, res) => {
        const data = (res && res.name && res.code) ? res : null;
        return (err) ? reject(err) : resolve(data);
      });
    });
  }

  function getByName(name) {
    // Your promise code here!
    return new Promise((resolve, reject) => {
      countryInfo.getCountryInfoByName(name, (err, res) => {
        const data = (res && res.name && res.code) ? res : null;
        return (err) ? reject(err) : resolve(data);
      });
    });
  }
  
  return {
    getByCode,
    getByName
  };
};
