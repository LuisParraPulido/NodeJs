const store = require('./store');

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
      date: new Date(),
    }
    
    store.add(fullMessage);

    resolve(fullMessage);
  });
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  })
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject('Invalid data');
      return false;
    }
    const result = await store.updateText(id, message);

    resolve(result);
  })
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if(!id) {
      reject('Id invalid');
      return false
    }
    store.remove(id)
      .then(() => {
        resolve();
      })
      .catch(error => {
        reject(error)
      })
  })
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage,
};
