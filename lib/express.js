var http = require('http');
var url = require('url')
var router = require('./router');



var express = () => {
  var app = {
    listen: (port, host, callback => {
      let server = http.createServer(router.handle)
      server.listen(port, host, () => {
        console.log(`Listening: http://${ host }:${ port }`);
      });

    })
  }
}


// Delegate the server callback to the router
// var server = http.createServer(router.handle);
//
//
// server.listen(port, host, () => {
//   console.log(`Listening: http://${ host }:${ port }`);
// });


module.exports = express;
