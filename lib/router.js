var http = require('http');
var url = require('url');
var parser = require('./parser')
const methods = [
  "get",
  "post"
];

const ignoreColon = method => {return method.replace(/[^a-zA-Z]/g, "")}

var Router = {}

let parsePath = path => {
  let split = path.split("/")
  split = split.splice(1)
  split.forEach( url => {
    if (url[0] === ":"){}
  })

}


var Router = {
  listen: (port, host, callback) => {
  var server = http.createServer(Router.handle);
  server.listen(port, host, callback);
  },
 routes: {},
 handle: (req, res) => {

   // this is where it handles in comming requests from the browser.
  const method = req.method.toLowerCase();
  const path = url.parse(req.url).pathname;

  console.log("path", path)
  console.log("method, ", method)

  // handle parsing here.

  if (Router.routes[method][path]) {

    var p = new Promise((resolve) => {
      if (method !== 'get') {
        _extractPostData(req, resolve);
      } else {
        resolve();
      }
    });

    p.then(() => {
      Router.routes[method][path](req, res);
    });
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
    }
  }
}

// This is where you are mapping the requests from the index.js module.
methods.forEach( method => {
  Router.routes[method] = Router.routes[method] || {};

  Router[method] = (path, callback) => {
    Router.routes[method][path] = callback;
    console.log("path", path)
    console.log("callback", callback)
    console.log("Router routes", Router.routes)
  }

})


module.exports = Router;
