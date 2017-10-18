const joinHouse = (io, client, houseId) => {
  console.log(`hit the join house ctrl with houseId: ${houseId}`);
};

const leaveHouse = (io, client, houseId) => {
  console.log(`hit the leave house ctrl with houseId: ${houseId}`);
};

module.exports = {
  joinHouse,
  leaveHouse,
};
