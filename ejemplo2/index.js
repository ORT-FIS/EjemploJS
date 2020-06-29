const http = require("http");
var fileSystem = require("fs");
const createPet = require('./scenes/signUp/index.js');
var queryString = require('querystring');

const hostname = "127.0.0.1";
const port = 3000;
const entryPointHtml = "scenes/signUp/index.html";

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let body = '';

        req.on('data', function (data) {
            body += data;
            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                req.connection.destroy();
        });

        req.on('end', function () {
            let petInfo = queryString.parse(body);
            const response = createPet(petInfo);
            if (response.hasAnError) {
                res.writeHead(500, {
                    "Content-Type": "text/plain"
                });
                res.end("Error trying to create a pet");
            } else {
                console.log('entre')
                res.writeHead(200, {
                    "Content-Type": "text/plain"
                });
                res.end("Success");
            }
        });
    }
    fileSystem.readFile(entryPointHtml, function (error, fileContent) {
        if (error) {
            res.writeHead(500, {
                "Content-Type": "text/plain"
            });
            res.end("Error");
        } else {
            res.writeHead(200, {
                "Content-Type": "text/html"
            });
            res.write(fileContent);
            res.end();
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});