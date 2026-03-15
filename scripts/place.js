const currentYear = new Date().getFullYear();
document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML =
  `Last Modification: ${document.lastModified}`;

function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

const temp = 10;
const windSpeed = 5;

const windChillDisplay = document.getElementById("wind-chill");

if (temp <= 10 && windSpeed > 4.8) {
  windChillDisplay.textContent = calculateWindChill(temp, windSpeed) + " ℃";
} else {
  windChillDisplay.textContent = "N/A";
}
