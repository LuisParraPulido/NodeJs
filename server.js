const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const { config } = require('./config');
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`;

const router = require('./network/routes');

db(MONGO_URI);

const app = express();

app.use(bodyParser.json());

router(app);



app.use('/app', express.static('public'));

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
