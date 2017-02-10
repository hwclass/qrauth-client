//Configs
import urls from './config/url';
import { qrAuth } from './config/dom';

//Utilities
import connect from './utils/connect'
import auth from './utils/auth'
import ifElementExists from './utils/ifElementExists';

//3rd-Parties
import qrcode from './utils/qrcode';

let Qrauth = {

  /**
  * init is a library initialization method
  *
  * @param <Object> options
  * @param <Promise> callback
  */
  async init(appId, appSecret) {
    try {
        
        let obj = Object.create(this);
        
        obj.appId = appId;
        obj.appSecret = appSecret;
        
        const socket = await connect('socket');

        socket.on('connect', () => {
          // const isAuthenticated = await auth(appId, appSecret);
          const isAuthenticated = null;
          if (!isAuthenticated.success) console.log(config.messages.error.default); //TODO: config for messages
          ifElementExists(qrAuth)
        });
          
        return result;
     
    } catch (err) {
      console.log(err.message);
    }
  }

};

module.exports = Qrauth;
