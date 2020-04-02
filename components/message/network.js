const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res) {
  console.log(req.headers);
  res.header({
    "custom-header": "Nuestro valor personalizado",
  })
  response.success(req, res, 'List of messages');
})
router.post('/', function(req, res) {
  
  controller.addMessage(req.body.user, req.body.message)
    .then((fullmessage) => {
    response.success(req, res, fullmessage, 201);
    })
    .catch(error => {
      response.error(req, res, 'Invalid Data ', 400, 'This is a simulation of errors');
    })
});

module.exports = router;