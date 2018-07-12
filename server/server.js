const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 3000;

app.use(express.static('dist'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/dist/index.html');
});


http.listen(PORT, function () {
  console.log('Server listening on port ', PORT);
});

io.on('connection', (client) => {
  console.log('Client connected');
  
  client.on('disconnect', () => {
    console.log('Client disconnected');
  });

});
