

const listAstronautJobs = (roster) => {
  // Code here!

  return roster.map(astro => astro.job);
}

const roster = [
  {
    firstName: "Chris",
    lastName: "Hadfield",
    nickname: "Space Oddity",
    prefix: "Astronaut",
    job: "Shuttle DJ"
  },

  {
    firstName: "John",
    lastName: "Star",
    nickname: "Space boi",
    prefix: "Astronaut",
    job: "Space Cook"
  }
];

console.log(listAstronautJobs(roster));