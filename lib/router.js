var http = require('http');
var url = require('url');

const methods = [
  "get"
];

Router = {};

Router.routes = {};

Router.listen = (port, host, callback) => {
  var server = http.createServer(Router.handle);
  server.listen(port, host, callback);
  }

methods.forEach((verb) => {
  Router.routes[verb] = Router.routes[verb] || {};

  Router[verb] = (path, callback) => {
    Router.routes[verb][path] = callback;
  }
})


Router.handle = (req, res) => {
  const verb = req.method.toLowerCase();
  const path = url.parse(req.url).pathname;

  if (Router.routes[verb][path]) {
    Router.routes[verb][path](req, res);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
}


module.exports = Router;
