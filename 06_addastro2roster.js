const roster = [];
const astronaut = {
  firstName: "Chris",
  lastName: "Hadfield",
  nickname: "Space Oddity",
  prefix: "Astronaut"
};


const addAstronautToRoster = (roster, astronaut) => {
  // Code here!
  roster.push(astronaut);

  // Remember to return a value!
  return roster;
}

addAstronautToRoster(roster, astronaut);

console.log({ roster });