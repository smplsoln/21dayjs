
const listOfReceivedData = [
  { type: "astro", data: "Saturn Data" },
  { type: "bio", data: "Space Potatoes" },
  { type: "physics", data: "Lagrange Points" },
  { type: "bio", data: "OMG Tardigrades" },
  { type: "physics", data: "Material reflectivity" },
  { type: "astro", data: "Mercury is not the hottest" },
];


const organizeData = (receivedData) => {
  // Code here!
  let organizedData = {};
  for (const {type, data} of receivedData) {
    let valArr = organizedData[type] || [];
    valArr.push(data);
    organizedData[type] = valArr;
  }

  return organizedData;
};

console.log(organizeData(listOfReceivedData));

