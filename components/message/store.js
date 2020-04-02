const { config } = require('../../config');
const db = require('mongoose');
const Model = require('./model');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

db.Promise = global.Promise;
db.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
console.log('[db] connected succesfully');

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessages() {
  const messages = await Model.find();
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id
  });

  foundMessage.message = message;

  const newMessage = await foundMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessages,
  updateText: updateText,
  // get
  // update
  // delete
}
