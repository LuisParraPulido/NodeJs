const express = require('express');
const app = express();
const server = require('http').Server(app);

const bodyParser = require('body-parser');
const socket = require('./socket')
const db = require('./db');
const router = require('./network/routes');

const { config } = require('./config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;
db(MONGO_URI);


app.use(bodyParser.json());

socket.connect(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function () {
  console.log('La aplicación está escuchando en http://localhost:3000');
});
