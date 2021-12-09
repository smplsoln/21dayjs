
const countActiveAstronauts = (roster) => {
  // Code here!
  return roster ? roster.length : 0;
};

const roster = [
  {
    firstName: "Chris",
    lastName: "Hadfield",
    nickname: "Space Oddity",
    prefix: "Astronaut",
    job: "Shuttle DJ"
  }
];

console.log(countActiveAstronauts(roster));