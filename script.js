function convert() {
  let temperature = parseFloat(document.getElementById("temperature").value);
  let fromUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;

  // Check if temperature is entered and if both units are selected
  if (isNaN(temperature) && (!fromUnit || !toUnit)) {
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

  const conversions = {
    Celsius: {
      Fahrenheit: (temp) => (temp * 9) / 5 + 32,
      Kelvin: (temp) => temp + 273.15,
      Rankine: (temp) => ((temp + 273.15) * 9) / 5,
    },
    Fahrenheit: {
      Celsius: (temp) => ((temp - 32) * 5) / 9,
      Kelvin: (temp) => ((temp - 32) * 5) / 9 + 273.15,
      Rankine: (temp) => temp + 459.67,
    },
    Kelvin: {
      Celsius: (temp) => temp - 273.15,
      Fahrenheit: (temp) => ((temp - 273.15) * 9) / 5 + 32,
      Rankine: (temp) => (temp * 9) / 5,
    },
    Rankine: {
      Celsius: (temp) => ((temp - 491.67) * 5) / 9,
      Kelvin: (temp) => ((temp - 491.67) * 5) / 9 + 273.15,
      Fahrenheit: (temp) => temp,
    },
  };

  let convertedValue = conversions[fromUnit][toUnit](temperature);

  document.getElementById(
    "result"
  ).innerText = `${temperature} ${fromUnit} is equal to ${convertedValue.toFixed(
    2
  )} ${toUnit}.`;
}

function resetFields() {
  document.getElementById("temperature").value = "";
  document.getElementById("fromUnit").value = "";
  document.getElementById("toUnit").value = "";
  document.getElementById("result").innerText = "";
}
