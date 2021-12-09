const gaugeList = [
  {
    current:0.4,
    min:0.1,
    max:0.9
  },
  {
    current:1.2,
    min:0.1,
    max:0.6
  }
];

const checkAllGauges = (gaugeList) => {
  // Code here!
  // for(let gauge of gaugeList) {
  //   const { current, min, max } = gauge;
  //   if (current > max || current < min) {
  //     return false;
  //   }
  // }
  // return true;
  return gaugeList.every(gauge => (gauge.current > gauge.min && gauge.current < gauge.max));
};

console.log(checkAllGauges(gaugeList));

