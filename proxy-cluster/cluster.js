const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
const randomDelayMS = () => Math.floor(Math.random() * 10) * 1000;

if (cluster.isMaster) {
  console.log(`Master ${process.pid} is running`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  // Workers can share any TCP connection
  // In this case it is an HTTP server
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end(`hello from ${process.pid}`);
    /*
    let delay = randomDelayMS();
    setTimeout(() => {
      res.end(`hello from ${process.pid} after ${delay}ms`);
    }, delay);
    */
  }).listen(8889);

  console.log(`Worker ${process.pid} started`);
}
