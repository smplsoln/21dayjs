const launchDate = "2021-12-12";
const fakeToday = "2021-12-01";
const missionName = "Moon visit";

const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date(); // Do not alter this line!

  // Code here!
  const daysRemaining = Math.round(((new Date(launchDate)) - new Date(today)) / (24*3600*1000));
  return { missionName, daysRemaining };
};

console.log(timeRemaining(launchDate, missionName, fakeToday));