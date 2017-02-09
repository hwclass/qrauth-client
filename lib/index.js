//Configs
import urls from './config/url';

//Utilities
import connect from './utils/connect'

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
          
        });
          
        return result;
     
    } catch (err) {
      console.log(err.message);
    }
  }

};

module.exports = Qrauth;
