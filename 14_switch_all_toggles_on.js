const toggleList = [
	{
		name:"Air",
		isOn:true
	},
	{
		name:"Radio",
		isOn:false
	},
];

const switchAllTogglesOn = (toggleList) => {
  // Code here!
  toggleList.forEach(toggle => toggle.isOn = true);
  return toggleList;
};

console.log(switchAllTogglesOn(toggleList));