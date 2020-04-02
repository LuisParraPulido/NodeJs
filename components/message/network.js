const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function(req, res) {
  controller.getMessages()
    .then((messageList) => {
      response.success(req, res, messageList, 200)
    })
    .catch (error => {
      response.error(req, res, "Unexpected Error", 500, error)
    })
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
router.patch('/:id', function (req, res) {
  controller.updateMessage(req.params.id, req.body.message)
    .then((data) => {
      response.success(req, res, data, 200);
    })
    .catch((error) => {
      response.error(req, res, 'Internal Error', 500, error)
    })
})

module.exports = router;