const http = require("http");
const app = require("./app");

let server = http.createServer(app);

server.listen(3000, function() {
    console.log("connection is ready and PORT Running on 3000");
});