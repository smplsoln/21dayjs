const exmAstronaut = {
  firstName: "Chris",
  lastName: "Hadfield",
  nickname: "Space Oddity",
  prefix: "Astronaut"
}


const addJobToAstronaut = (astronaut, job) => {
  // Code here!
  astronaut['job'] = job;

  // Remember to return a value!
  return astronaut;
}

addJobToAstronaut(exmAstronaut, "Shuttle DJ");

console.log({exmAstronaut});