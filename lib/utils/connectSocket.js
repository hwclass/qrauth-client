//Libraries
import io from 'socket.io-client';

/**
* connectSocket is a method to create communication between your client
* and server supporting a socket communication
* 
* @param <string> type
* @param <Promise> callback
*/
export default async function connectSocket (url) {
  return new Promise((resolve, reject) => {
    const socket = io(url);
    resolve(socket);
  });
};