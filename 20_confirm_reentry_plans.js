
const speed = 40
const missionData = {
  astro:["...","..."],
  bio:["..."],
  physics:["..."]
};

const checks = {
  maxSpeed:50,
  minSpeed:20,
  dataEntries:{
    astro:3,
    bio:1,
    physics:1
  }
};

const confirmReentryPlans = (speed, missionData, checks) => {
  // Code here!
  const { maxSpeed, minSpeed, dataEntries } = checks;
  if (speed > maxSpeed || speed < minSpeed) {
    return false;
  }

  for (const [key, value] of Object.entries(missionData)) {
    if (value.length !== dataEntries[key]) {
      return false;
    }
  }
  return true;
};


console.log(confirmReentryPlans(speed, missionData, checks));