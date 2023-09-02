const temperatureInput = document.getElementById("temperatureInput");
const unitSelect = document.getElementById("unitSelect");
const convertBtn = document.getElementById("convertBtn");
const resultElement = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const temperature = parseFloat(temperatureInput.value);
  if (!isNaN(temperature)) {
    const unit = unitSelect.value;
    const convertedTemperature = unit === "celsius" ? (temperature - 32) * 5/9 : temperature * 9/5 + 32;
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} °${unit === "celsius" ? "C" : "F"}`;
  } else {
    resultElement.textContent = "Please enter a valid number.";
  }
});
