/*var express = require('express');
var path = require('path');
var app = express();

// Define the port to run on
app.set('port', 8080);

app.use(express.static(path.join(__dirname, 'public')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Magic happens on port ' + port);
});*/

const path = require("path");
const liveServer = require("live-server");
const config = require("./node_server_config");
const live_server_opts = {
    host: config.host,
    port: config.port,
    open: true,
    mount: [],
    proxy: [],
    logLevel: 2,
    root: "build/",
    file: "index.html"
};

liveServer.start(live_server_opts);