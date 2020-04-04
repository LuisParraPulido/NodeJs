const Model = require('./model');

async function getUsers() {
  const users = await Model.find();
  return users;
}

function addUser(user) {
  const myUser = new Model(user);
  return myUser.save();
}

module.exports = {
  add: addUser,
  list: getUsers,
}