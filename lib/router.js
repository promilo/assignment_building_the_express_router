var url = require('url')
var Router = {}

Router.routes = {}




Router.handle = (req, res) => {
  res.end('Hello from the router')
}


module.exports = Router;
