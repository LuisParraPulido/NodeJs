const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response')
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(router);

router.get('/message', function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  })
  response.success(req, res, 'List of messages');
})
router.post('/message', function(req, res) {
  console.log(req.query);
  if (req.query.error == 'ok') {
  response.error(req, res, 'simulated Error', 400);
  } else {
    response.success(req, res, 'Created', 201);
  }
})


app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
