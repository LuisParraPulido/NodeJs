

function addMessage(user, message) {
  return new Promise ((resolve, reject) => {
    if (!user || !message) {
      console.error('[messageController] There is not user or message');
      reject('Data is incorrect');
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      data: new Date(),
    }
    console.log(fullMessage);
    resolve(fullMessage);
  });
}

module.exports = {
  addMessage,
};
