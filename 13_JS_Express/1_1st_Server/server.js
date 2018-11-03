const http = require('http');

const port = 8080;

function requestHandler (request, response) {
    response.end("Everything works: The port that was visited is: " + request.url)
}

const server = http.createServer(requestHandler);

server.listen(port, function() {
    console.log("The server is listening on: http://localhost:" + port)
});

