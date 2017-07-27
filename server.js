var http = require('http');
var importedStuff = require('./array');

http.createServer(function(request, response) {
  response.writeHead(200, {'Content-type': 'text/plain'});
  response.write(importedStuff.randomThings[Math.floor(Math.random() * importedStuff.randomThings.length)]);
  response.end();
}). listen (8888);

console.log(importedStuff.randomThings[Math.floor(Math.random() * importedStuff.randomThings.length)]);
