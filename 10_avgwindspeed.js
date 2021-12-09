const averageWindSpeed = (weatherEntries) => {
  // Code here!
  return Math.round(weatherEntries.map((weatherEntry) => weatherEntry.windSpeed)
                        .reduce((prev, cur) => prev + cur)
                        / weatherEntries.length);
};

const exampleEntries = [
  {
    temperature:0,
    weather:"sunny",
    windDirection: "NNE",
    windSpeed:24
  },
  {
    temperature:10,
    weather:"cloudy",
    windDirection: "NNE",
    windSpeed:9
  }
];

console.log("avg wind speed: ", averageWindSpeed(exampleEntries));

