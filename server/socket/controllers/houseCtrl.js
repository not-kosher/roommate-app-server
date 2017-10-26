const joinHouse = (io, client, houseId) => {
  client.join(houseId);
};

const leaveHouse = (io, client, houseId) => {
  client.leave(houseId);
};

module.exports = {
  joinHouse,
  leaveHouse,
};
