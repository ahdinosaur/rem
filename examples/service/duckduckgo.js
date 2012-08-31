var rem = require('../../rem');
var read = require('read');

var ddg = rem.load('duckduckgo', 1.0);

read({prompt: "Define topic: "}, function (err, topic) {
  ddg.get({q: topic}, function(err, json, res) {
    return console.log(err, json);
  });
});