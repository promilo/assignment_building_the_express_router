// 1. Require Express
var express = require('./lib/express');

// 2. Create an application with the
// returned function
var app = express();
console.log("app", app)

// 3. Create routes via the app object
app.get('/', (req, res) => {
  res.end('Hi world!\n');
});

app.get('/parsed/:1', (req, res) => {
  res.end('its [parsed]');
});

// 4. Start up a server with app.listen
var port = process.env.PORT || 4000;
var host = 'localhost';

app.listen(port, () => {
  console.log(`Listening at: http://${ host }:${ port }`);
});
