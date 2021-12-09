const temperature = 32;
const condition = "Sunny with small clouds";
const windSpeed = 20;
const windDirection = "NNE";


const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Code here!
  const weatherConditions = {}
  temperature = Math.round((temperature - 32) * 5/9);
  weatherConditions['temperature'] = temperature;
  weatherConditions['condition'] = condition;

  windSpeed = Math.round((windSpeed * 1609.34) / 3600);
  weatherConditions['windSpeed'] = windSpeed;
  weatherConditions['windDirection'] = windDirection;

  // Remember to return an object!
  return weatherConditions;
}

const weatherConditions = storeWeatherConditions(temperature, condition, windSpeed, windDirection);

console.log({weatherConditions});