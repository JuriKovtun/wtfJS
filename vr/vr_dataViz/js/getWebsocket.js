const mySocket = new WebSocket("ws://localhost:3001");

mySocket.onopen = () => {
  // connection is opened and ready to use
  console.log("connection is opened");
  console.log(mySocket.readyState);
};

mySocket.onmessage = event => {
  console.log(JSON.parse(event.data));
};

mySocket.onerror = error => {
  console.log(error);
};
