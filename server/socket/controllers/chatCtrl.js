const Message = require('../../db/models/Message');

const addChatMessage = (io, client, houseId, messages) => {
  io.to(houseId).emit('newChatMessage', messages);

  Message.create({
    houseId,
    userId: messages[0].user._id,
    giftedId: messages[0]._id,
    text: messages[0].text,
  })
    .then(message => console.log(`Added new message to db: ${message}`))
    .catch(err => console.log(`FAILED to add message to db: ${err}`));
};

module.exports = {
  addChatMessage,
};
