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
        
        const result = await this.connect();

        return result;
     
    } catch (err) {
      console.log(err.message);
    }
  },

  async connect() {
    return await this.connectSocket('http://localhost:8001');
  },

  async connectSocket(url) {
    return new Promise((resolve, reject) => {
      resolve('Established socket communication with ' + url);
    });
  }

};

module.exports = Qrauth;
