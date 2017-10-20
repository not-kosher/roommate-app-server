const db = require('../../db/config');

const addMessage = (io, client, houseId, messages) => {
  console.log(`hit the add message ctrl with message: ${messages[0]}`);
  // emit to the houseId the message
  io.to('houseId').emit('newChatMessage', messages);

  // add that message to the db...
  // message has houseId, userId, text
  db.Message.create({
    houseId,
    userId: messages[0].user._id,
    text: messages[0].text,
  })
    .then(message => console.log(`Added new message to db: ${message}`))
    .catch(err => console.log(`FAILED to add message to db: ${err}`));
};

module.exports = {
  addMessage,
};
