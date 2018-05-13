const express = require('express');
const router = express.Router();
const requestHandlers = require('../requestHandlers');

router.get('/', function(req, res) {
  res.send(requestHandlers.getEvents());
});

module.exports = router;
