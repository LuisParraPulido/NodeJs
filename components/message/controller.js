

function addMessage(user, message) {
  const fullMessage = {
    user: user,
    message: message,
    data: new Date(),
  }
  console.log(fullMessage);
}

module.exports = {
  addMessage,
};
