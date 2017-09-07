# node-lb
Proxying and load balancing node.js

# benchmarks
note: `ab` is kinda [broken](https://gist.github.com/akitaonrails/1724673) on os x and needs some work-arounds.

```bash
`$ ab -n 1000 -c 100 [-r] [url]`
```

| Type | Time taken (secs) | completed/failed | rps |
| --- | --- | --- | --- |
| single node http server  | 0.2  | 1000/0 | 4995 |
| node cluster w 4 workers | 0.3  | 1000/0 | 3301 |
| nginx + single node http server | 0.21 | 1000/0 | 4367 |
| nginx + node cluster w 4 workers | 0.34 | 1000/0 | 2914 |

# todos
- [x] nginx simple proxy
- [x] node cluster
- [x] nginx + node cluster
- [ ] node as load balancer with [node-http-proxy](https://goldfirestudios.com/blog/136/Horizontally-Scaling-Node.js-and-WebSockets-with-Redis)
- [ ] nginx, node and websockets (w/o redis)
- [ ] pm2 as lb
- [ ] add shared state to master in node cluster
- [x] nginx passing headers
- [ ] chaos monkey and failover [death by random timeout](https://medium.freecodecamp.org/scaling-node-js-applications-8492bd8afadc)

### nginx simple proxy
- [x] set pid, log files and proxy in config
- [x] test config `nginx -t -c [absolute/path/to/config]`
- [x] run by config `nginx -c file -p prefix`

# license
MIT
