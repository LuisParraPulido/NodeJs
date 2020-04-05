const store = require('./store');
const socket = require('../../socket').socket;

function addMessage(chat, user, message, file) {
  return new Promise ((resolve, reject) => {
    if (!chat || !user || !message) {
      console.error('[messageController] There is not chat, user or message');
      reject('Data is incorrect');
      return false;
    }

    let fileUrl = '';
    if (file) {
      fileUrl = 'http://localhost:3000/app/files/' + file.filename;
    }
    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl,
    }
    
    store.add(fullMessage);

    socket.io.emit('message', fullMessage)

    resolve(fullMessage);
  });
}

function getMessages(filterChat) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterChat));
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
