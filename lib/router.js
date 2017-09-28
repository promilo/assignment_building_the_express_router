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

methods.forEach((method) => {
  Router.routes[method] = Router.routes[method] || {};

  Router[method] = (path, callback) => {
    Router.routes[method][path] = callback;
  }
})


Router.handle = (req, res) => {
  const method = req.method.toLowerCase();
  const path = url.parse(req.url).pathname;

  if (Router.routes[method][path]) {
    Router.routes[method][path](req, res);
  } else {
    res.statusCode = 404;
    res.end("Not Found");
  }
}


module.exports = Router;
