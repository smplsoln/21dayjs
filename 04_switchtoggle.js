

const switchToggle = (toggle) => {
  // Code here!
  toggle.isOn = !toggle.isOn;
  // Remember to return a value!
  return toggle;
}

const someToggle = {
  name: "toggleA",
  isOn: false
}

let i = 0;
console.log(" toggle ", i++, ": ", someToggle);

switchToggle(someToggle);
console.log(" toggle ", i++, ": ", someToggle);

someToggle.name = "toggleB";
someToggle.isOn = true;
i = 0;
console.log(" toggle ", i++, ": ", someToggle);
switchToggle(someToggle);
console.log(" toggle ", i++, ": ", someToggle);
switchToggle(someToggle);
console.log(" toggle ", i++, ": ", someToggle);

