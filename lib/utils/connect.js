//Utilities
import connectSocket from './connectSocket';

//Configs
import { AUTH_URL } from '../config/url';
/**
* connect is a method to connect any url
*
* @param <string> type
* @param <Promise> callback
*/
const connect = async () => {
  return await connectSocket(AUTH_URL);
};

export default connect;