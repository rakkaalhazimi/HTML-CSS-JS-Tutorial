const WebSocket = require('ws');

// Create a WebSocket server instance
const wss = new WebSocket.Server({ port: 8080 });

// Event listener for connection

function handleIncomingMessage(message, ws) {
  console.log('Received: %s', message);
  wss.clients.forEach((client) => {
    if (client !== ws && client.readyState === WebSocket.OPEN) {
      client.send(message);
    }
  });
}

function handleConnection(ws) {
  console.log('A new client connected');
  ws.on('message', handleIncomingMessage, ws);
}


wss.on('connection', handleConnection);
