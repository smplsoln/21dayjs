const listOfChoices1 = [
  "Chicken Dinner",
  "Chicken Dinner",
  "Chicken Dinner",
  "Ice Cream Sandwich",
  "Ice Cream Sandwich"
];

const listOfChoices = [
  "Ceasar Salad",
  "Ceasar Salad",
  "Ceasar Salad",
  "Stale Bread",
  "Stale Bread",
  "Stale Bread",
  "Stale Bread"
]

const chooseLunchWinner = (listOfChoices) => {
  //Code here!
  let choice = listOfChoices[0];
  let max = 0;
  const choiceCounts = {};

  for (const ch of listOfChoices) {
    let cur = choiceCounts[ch] || 0;
    choiceCounts[ch] = cur + 1;
  }
  console.log(choiceCounts);
  for (const [ch, count] of Object.entries(choiceCounts)) {
    if (count > max) {
      max = count;
      choice = ch;
    }
  }
  return choice;
};

console.log(chooseLunchWinner(listOfChoices));