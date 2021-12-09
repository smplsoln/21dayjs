const firstPosition = {
  time: 1637074462,
  altitude: 1100
};
const secondPosition = {
  time: 1637074558,
  altitude: 2200
};

const getAverageSpeed = (firstPosition, secondPosition) => {
  // code here!
  return Number(((secondPosition.altitude - firstPosition.altitude) / (secondPosition.time - firstPosition.time)).toFixed(1));
};

console.log(getAverageSpeed(firstPosition, secondPosition));
