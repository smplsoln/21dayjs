const generateAstronautTag = (astronaut) => {
  // Code here!

  // Remember to return a value!
  const tagString = astronaut.prefix + ": " + astronaut.firstName + " \"" + astronaut.nickname + "\" " + astronaut.lastName;

  return tagString;
}

const exampleAstronaut = {
  firstName: "Yuri",
  lastName: "Gagarin",
  nickname: "First!",
  prefix: "Cosmonaut"
}

let tag = generateAstronautTag(exampleAstronaut);
console.log(tag);

exampleAstronaut.firstName = "Ay";
exampleAstronaut.lastName = "Rane";
exampleAstronaut.nickname = "tika";
exampleAstronaut.prefix = "Miss";

tag = generateAstronautTag(exampleAstronaut);
console.log(tag);
