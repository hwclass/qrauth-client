//Utilities
import connectSocket from './connectSocket';

/**
* connect is a method to connect any url
*
* @param <string> type
* @param <Promise> callback
*/
const connect = async (type) => {
  return await connectSocket(url[type]);
};

export default connect;