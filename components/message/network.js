const express = require('express');
const response = require('../../network/response')

const router = express.Router();

router.get('/', function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  })
  response.success(req, res, 'List of messages');
})
router.post('/', function(req, res) {
  console.log(req.query);
  if (req.query.error == 'ok') {
  response.error(req, res, 'Unexpected Error', 500, 'This is a simulation of errors');
  } else {
    response.success(req, res, 'Created', 201);
  }
});

module.exports = router;