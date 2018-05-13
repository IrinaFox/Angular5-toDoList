const statuses = require('./LocalStorage/statusesStorage');
const events = require('./LocalStorage/eventsStorage');
const _ = require('./node_modules/underscore/underscore-min');

function getEvents() {
  events.forEach((event) => {
    event.status = getStatus(event.statusId).name;
  });

  return JSON.stringify(events);
}

function getStatus(id) {
  return _.findWhere(statuses, {id: id});
}

exports.getEvents = getEvents;
