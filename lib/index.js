//Configs
import { AUTH_URL } from './config/url';
import els from './config/dom';
import { default } from './config/message';

//Utilities
import connect from './utils/connect'
import auth from './utils/auth'
import elementExists from './utils/elementExists';
import dom from './utils/dom';
import clearCode from './utils/clearCode';

//3rd-Parties
import QRCode from './utils/qrcode';

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
        
        const socket = await connect();

        await socket.on('connect');

        const isAuthenticated = await auth(appId, appSecret);

        //TODO: Activate default error message if isAuthenticated.success is false.
        /*
          if (!isAuthenticated.success) {
            console.log('default');
          }
        */

        //TODO: Break if uid or accessToken are not present
        //if (!isAuthenticated.uid || !dom.accessToken) return;

        if(elementExists(els.qrAuth)) {
          let qrCode = new QRCode({
            width: dom(els.qrAuth).style.width,
            height: dom(els.qrAuth).style.height,
            colorDark : document.querySelectorAll('[data-color-dark]'),
            colorLight : document.querySelectorAll('[data-color-light]'),
            correctLevel : QRCode.CorrectLevel.L
          });

          let rawCode = isAuthenticated.uid + "_" + dom.accessToken;

          qrcode.makeCode(rawCode);
        }

        //TODO: Activate while server endpoint is running
        /*
        const redirect = await socket.on('redirect');
        window.location.href = redirect;
        */

        const disconnect = await socket.on('disconnect');

        //TODO: Activate if #qrauth element is present within DOM
        /*
         * Warning: Cannot set property 'innerHTML' of null
         * since no element is found in the DOM
         */
        // clearCode(els.qrAuth);
     
    } catch (err) {
      console.log(err.message);
    }
  }

};

module.exports = Qrauth;
