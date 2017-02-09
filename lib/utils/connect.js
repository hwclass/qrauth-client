//Utilities
import connectSocket from './utils/connectSocket';

/**
* connect is a method to connect any url
*
* @param <string> type
* @param <Promise> callback
*/
export default async function connect (type) {
  return await connectSocket(url[type]);
};