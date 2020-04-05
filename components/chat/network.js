const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
  controller.addChat(req.body.users)
    .then((data) => {
    response.success(req, res, data, 201);
    })
    .catch(error => {
      response.error(req, res, 'Internal Error ', 500, error);
    })
});

router.get('/:userId', function(req, res) {
  controller.listChats(req.params.userId)
    .then((users) => {
      response.success(req, res, users, 200)
    })
    .catch (error => {
      response.error(req, res, "Internal Error", 500, error)
    })
})

module.exports = router;