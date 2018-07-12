import io from 'socket.io-client';

class SocketManager {

  constructor() {
    this.socket = null;
    this.peers = new Map();
  }

  connect(url) {
    console.log('Attempting to connect to:', url);
    this.socket = io(url);
    
    this.socket.on('connect', () => {
      console.log('Connection established with server!');
    });
    
    this.socket.on('CONNECTION_ACCEPTED', (data) => {
      console.log('CONNECTION_ACCEPTED event received!', {
        socket_id: this.socket.id,
        data
      });
    });
    
    this.socket.on('disconnect', () => {
      console.log('Disconnected from server!');
    });
  }
}

export default SocketManager;
