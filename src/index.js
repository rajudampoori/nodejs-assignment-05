var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url == "/") {
        res.end("welcome ")
    }

    if (req.url == "/welcome") {
        res.writeHead(200, { "Content-type": "text/plain" })
        res.end("Welcome to Dominos")
    }

    if (req.url == "/contact") {
        res.writeHead(200, { "Content-type": "application/json" })
        res.end(JSON.stringify({
            phone: '18602100000',
            email: 'guestcaredominos@jublfood.com'
        }));
    }

    else {
        res.writeHead(404).end("File not found")
    }
}

httpServer.listen(8081, () => { console.log("The server is up at 8081") })

module.exports = httpServer;