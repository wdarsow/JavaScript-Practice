const http = require('http');
const PORT = 8080;
const fs = require('fs');

const server = http.createServer(requestHandler);

server.listen(PORT, function() {
    console.log("The server is running on port: " + PORT);
})

function requestHandler(request, response) {
    let pageUrl = request.url;

    switch (pageUrl) {
        case '/fav_foods.html':
            fs.readFile(__dirname + "/fav_foods.html", function(error, data) {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(data);
                console.log("first case statement" + request.url)
            });
            break;
        case '/fav_movies.html':
            fs.readFile(__dirname + "/fav_movies.html", function(error, data) {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(data);
                console.log("second case statement!");
            });
            break;
        case '/fav_languages.html':
            fs.readFile(__dirname + "/fav_languages.html", function(error, data) {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(data);
                console.log("3rd case statement");
            });
            break;
        default: 
            fs.readFile(__dirname + "/home.html", function(error, data) {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.end(data);
                console.log("default case statement" + request.url)
            });
    }
}
    // console.log(request.url);
    // console.log("this is logging the request object" + request);
    // fs.readFile(__dirname + "/home.html", function(err, data) {
    //     response.writeHead(200, { "Content-Type": "text/html"});
    //     response.end(data);
    //})
// }

/*
switch (pageUrl) {
    case '/':
    console.log("url reached");
    break;
}
*/