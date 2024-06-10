function convertirCelsiusAFahrenheit(tempCelsius) {
    const tempFahrenheit = (tempCelsius * 9/5) + 32;
    console.log(` Si tienes ${tempCelsius} grados Celsius, eso sería como ${tempFahrenheit.toFixed(2)} grados Fahrenheit.`);
}

convertirCelsiusAFahrenheit(17);