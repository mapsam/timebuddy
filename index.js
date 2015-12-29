'use strict';

module.exports = timebuddy;

function timebuddy(time, callback) {
  var time = (time ? new Date(time) : new Date());
  callback(null, time);
}

// function timebuddy(time) {
//   var time = (time ? new Date(time) : new Date());
//   return time;
// }