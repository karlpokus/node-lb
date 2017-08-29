const http = require('http'),
      srv = http.createServer(),
      PORT = 9999;

function hello(req, res) {
  res.end(`hello from node on port ${PORT}`);
}

function running() {
  console.log('running on port', PORT);
}

srv.on('request', hello)
  .listen(9999, running)
