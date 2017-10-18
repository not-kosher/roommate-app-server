const joinHouse = (io, client, houseId) => {
  console.log(`hit the join house ctrl with houseId: ${houseId}`);
  client.join(houseId);
};

const leaveHouse = (io, client, houseId) => {
  console.log(`hit the leave house ctrl with houseId: ${houseId}`);
  client.leave(houseId);
};

module.exports = {
  joinHouse,
  leaveHouse,
};
