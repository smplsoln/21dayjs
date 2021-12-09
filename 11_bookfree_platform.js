
const bookFreePlatform = (platformList, missionDate) => {
  // Code here!
  for (pl of platformList) {
    if (!pl.bookDate) {
      pl['bookDate'] = missionDate;
      return platformList;
    }
  }
};
