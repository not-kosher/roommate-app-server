const houseCtrl = require('../controllers/houseCtrl.js');

const houseRouter = (io, client) => {
  client.on('joinHouse', houseId => houseCtrl.joinHouse(io, client, houseId));

  client.on('leaveHouse', houseId => houseCtrl.leaveHouse(io, client, houseId));
};

module.exports = houseRouter;
