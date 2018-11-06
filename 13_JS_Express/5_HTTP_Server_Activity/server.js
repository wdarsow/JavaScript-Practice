const http = require('http');
const PORT = 8080;
const fs = require('fs');

const server = http.createServer(requestHandler);

server.listen(PORT, function() {
    console.log("The server is running on port: " + PORT);
})

function requestHandler() {
    console.log("this is the request handler function");
}