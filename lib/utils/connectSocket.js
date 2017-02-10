//Libraries
import io from 'socket.io-client';

/**
* connectSocket is a method to create communication between your client
* and server supporting a socket communication
* 
* @param <string> type
* @param <Promise> callback
*/
const connectSocket = async (url) => {
  return new Promise((resolve, reject) => {
    const socket = io(url);
    resolve(socket);
  });
};

export default connectSocket;