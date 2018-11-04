const http = require('http');

const port1 = 7000;
const port2 = 7500;

const server1 = http.createServer(port1Func);
const server2 = http.createServer(port2Func);

function port1Func (request, response) {
    response.end("good work! port 7000" + request.url)
}

function port2Func (request, response) {
    response.end("good work! port 7500" + request.url);
}

server1.listen(port1, function(){
    console.log("the server is now listening on port: " + port1);
})

server2.listen(port2, function(){
    console.log("another server is listening on port: " + port2);
})

