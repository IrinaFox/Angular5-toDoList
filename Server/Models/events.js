const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/Events');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to db!');
});

let eventSchema = mongoose.Schema({
  name: String,
  status: String,
  date: String
});

const Event = mongoose.model('Event', eventSchema);

router.get('/', function(req, res) {
  Event.find(function (err, events) {
    if (err) return console.error(err);
    res.send(events);
  });
});

router.post('/', function(req, res) {
    const newEvent = new Event({
      name: req.body.name,
      status: req.body.status,
      date: new Date()
    });

    newEvent.save(function (err) {
        if (err) return console.error(err);
        res.send(newEvent);
    });
});

module.exports = router;
