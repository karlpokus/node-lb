# node-lb
Proxying and load balancing node.js

- [x] nginx simple proxy
- [ ] nginx as load balancer
- [ ] node as workers and load balancer with/without node cluster
- [ ] nginx, node and websockets
- [ ] nginx passing headers

### nginx simple proxy
- [x] set pid, log files and proxy in config
- [x] Test new config `nginx -t -c [absolute/path/to/config]`
- [x] run proxy test `nginx -c file -p prefix && node server.js`

# license
MIT
