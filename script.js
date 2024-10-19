function convert() {
  let temperature = parseFloat(document.getElementById("temperature").value);
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;

  // Check if temperature is entered and if both units are selected
  if (isNaN(temperature) & (!fromUnit || !toUnit)) {
    document.getElementById("result").innerText =
      "Enter temperature and choose a unit";
    return;
  }

  // Check if temperature is entered
  if (isNaN(temperature)) {
    document.getElementById("result").innerText = "Enter temperature.";
    return;
  }

  // Check if both units are selected
  if (!fromUnit || !toUnit) {
    document.getElementById("result").innerText =
      "Choose a unit to convert temperature.";
    return;
  }

  let convertedValue;
  let resultUnit;

  switch (fromUnit) {
    case "Celsius":
      if (toUnit === "Fahrenheit") {
        convertedValue = (temperature * 9) / 5 + 32;
        resultUnit = "Fahrenheit";
      } else if (toUnit === "Kelvin") {
        convertedValue = temperature + 273.15;
        resultUnit = "Kelvin";
      } else if (toUnit === "Rankine") {
        convertedValue = ((temperature + 273.15) * 9) / 5;
        resultUnit = "Rankine";
      } else {
        convertedValue = temperature;
        resultUnit = "Celsius";
      }
      break;
    case "Fahrenheit":
      if (toUnit === "Celsius") {
        convertedValue = ((temperature - 32) * 5) / 9;
        resultUnit = "Celsius";
      } else if (toUnit === "Kelvin") {
        convertedValue = ((temperature - 32) * 5) / 9 + 273.15;
        resultUnit = "Kelvin";
      } else if (toUnit === "Rankine") {
        convertedValue = temperature + 459.67;
        resultUnit = "Rankine";
      } else {
        convertedValue = temperature;
        resultUnit = "Fahrenheit";
      }
      break;
    case "Kelvin":
      if (toUnit === "Celsius") {
        convertedValue = temperature - 273.15;
        resultUnit = "Celsius";
      } else if (toUnit === "Fahrenheit") {
        convertedValue = ((temperature - 273.15) * 9) / 5 + 32;
        resultUnit = "Fahrenheit";
      } else if (toUnit === "Rankine") {
        convertedValue = (temperature * 9) / 5;
        resultUnit = "Rankine";
      } else {
        convertedValue = temperature;
        resultUnit = "Kelvin";
      }
      break;
    case "Rankine":
      if (toUnit === "Celsius") {
        convertedValue = ((temperature - 491.67) * 5) / 9;
        resultUnit = "Celsius";
      } else if (toUnit === "Kelvin") {
        convertedValue = ((temperature - 491.67) * 5) / 9 + 273.15;
        resultUnit = "Kelvin";
      } else if (toUnit === "Fahrenheit") {
        convertedValue = temperature;
        resultUnit = "Fahrenheit";
      } else {
        convertedValue = temperature;
        resultUnit = "Rankine";
      }
      break;
  }

  document.getElementById(
    "result"
  ).innerText = `Result: ${temperature} ${fromUnit} is ${convertedValue.toFixed(
    2
  )} ${resultUnit}`;
}

function resetFields() {
  document.getElementById("temperature").value = "";
  document.getElementById("fromUnit").value = "";
  document.getElementById("toUnit").value = "";
  document.getElementById("result").innerText = "";
}
