const convertToCelsius = function(fahr) {

  let outcome;
  outcome = (fahr - 32) * 5 / 9;
  outcome = Math.round(outcome * 10) / 10;
  return outcome;

};

const convertToFahrenheit = function(celc) {
  let outcome;
  outcome = (celc * 9 / 5) + 32;
  outcome = Math.round(outcome * 10) / 10;
  return outcome;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
