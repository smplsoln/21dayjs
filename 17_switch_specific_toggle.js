const toggleList = [
  {
    name: "toggleA",
    isOn: false
    },
  {
    name: "toggleB",
    isOn: true
  }
];
const specificToggle = "toggleA";
console.log(toggleList);

const switchSpecificToggle = (toggleList, specificToggle) => {
  // Code here!
  toggleList.every(toggle => {
    if (toggle.name == specificToggle) {
      toggle.isOn = !toggle.isOn;
    }
  });
  return toggleList;
};

console.log(switchSpecificToggle(toggleList, specificToggle));
