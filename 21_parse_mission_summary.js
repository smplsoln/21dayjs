const exchanges = [
  { origin: "MC", message: "So how is it out there?" },
  { origin: "Shuttle", message: "Oh it's pretty nice!" },
  { origin: "MC", message: "Did you like the challenges?" },
];

const missionData = {
  astro: ["...", "..."],
  bio: ["..."],
  physics: ["..."]
};


// Add parseMessage here if you want!

const parseMissionSummary = (exchanges, missionData) => {
  // Code here!
  return {
    "transcript": exchanges.map(m => m.origin + ": " + m.message),
    "missionData": missionData
  };
};

console.log(parseMissionSummary(exchanges, missionData));