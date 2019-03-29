const WebSocketServer = require("websocket").server;
const http = require("http");

////// Utility functions
const spawnDataset = () => {
  const getRandomInt = max => Math.floor(Math.random() * max);
  return new Array(9).fill().map(() => getRandomInt(31));
};
let dataset = spawnDataset();

////// Create HTTP server
const server = http.createServer((req, res) => {
  console.log(new Date() + "Received HTTP request for " + request.url);
  response.writeHead(404);
  response.end();
});

server.listen(3001, () => {
  console.log(new Date() + " Server is listening on port 3001");
});

// create WebSocket server
wsServer = new WebSocketServer({
  httpServer: server
});

// WebSocket server
wsServer.on("request", request => {
  console.log(
    new Date() + " Connection to WS from origin " + request.origin + "."
  );

  const connection = request.accept(null, request.origin);

  ////// push dataset to the client

  let pulse = setTimeout(function tick() {
    console.log("tick-tick");
    connection.sendUTF(JSON.stringify(spawnDataset()));
    pulse = setTimeout(tick, 250);
  }, 250);

  // all messages from client here.
  connection.on("message", message => {
    if (message.type === "utf8") {
      // process WebSocket message
    }
  });

  connection.on("close", connection => {
    // close user connection
    console.log("connection closed " + connection);
    clearTimeout(pulse);
  });
});
