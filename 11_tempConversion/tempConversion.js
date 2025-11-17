const convertToCelsius = function(fahValue) {
  const result = (fahValue - 32) * (5 / 9);
  return (Number.isInteger(result)) ? result : +result.toFixed(1);
};

const convertToFahrenheit = function(celValue) {
  const result = celValue * (9 / 5) + 32;
  return (Number.isInteger(result)) ? result : +result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
