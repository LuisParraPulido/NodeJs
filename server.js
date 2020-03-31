const express = require('express');
const bodyParser = require('body-parser')
const router = express.Router();

const app = express();

app.use(bodyParser.json());
app.use(router);

router.get('/message', function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  })
  res.send('List of messages');
})
router.post('/message', function(req, res) {
  console.log(req.query);
  console.log(req.body);
  res.status(201).send({error: '', body: 'Creado correctamente'});
})

// app.use('/', function (req, res) {
//   res.send('Hola');
// });

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');
