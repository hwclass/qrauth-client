/**
 * qrauth : The library file for qrauth application
 *
 */

 /**
  * qrauth : main library wrapper
  *
  * @param <Function> IIFE
  */
var qrauth = (function () {

  /**
  * Query is the model for queries
  * @param <String> appId
  * @param <String> appSecret
  */
  var Query = (function () {

    return function (appId, appSecret) {

      /*<Object> userProto*/
      var queryProto = new Object();

      /*<String> userProto.name*/
      queryProto.appId = appId;

      /*<String> userProto.surname*/
      queryProto.appSecret = appSecret;

      return {

        /**
        * appId
        */
        appId : queryProto.appId,

        /**
        * appSecret
        */
        appSecret : queryProto.appSecret,

        /**
        * getAppId is the getter method for appId property
        */
        getAppId : function () {
          return queryProto.appId;
        },

        /**
        * getAppSecret is the getter method for appSecret property
        */
        getAppSecret : function () {
          return queryProto.appSecret;
        },

        /**
        * setAppId is the setter method for appId property
        */
        setAppId : function (appId) {
          queryProto.appId = appId;
        },

        /**
        * setAppSecret is the setter method for appSecret property
        */
        setAppSecret : function (appSecret) {
          queryProto.appSecret = appSecret;
        }

      }

    };

  })();

  /**
  * init() is a library initialization method
  *
  * @param <Object> options
  * @param <Function> callback
  */
  var init = function (options) {

    var socket = null,
        qrcode = null;

    utils.getScript(config.urls.socketIO, function () {
      socket = io(config.urls.auth);
      socket.on('connect', function(){
        socket.on('join', function (data) {
          utils.getScript(config.urls.qrCode, function () {
            var query = new Query(options.appId, options.appSecret);
            utils.ajax(config.urls.auth, 'GET', query, 'json', 'application/json', function () {}, function (result) {
              if (!result.success) {          
                  console.log(config.messages.error.default);
                } else {
                  if (!utils.checkIfQrCodeExists()) {
                    $(config.els.accessToken).val(result.accessToken);
                    var qrAuthEl = document.getElementById('qrauth');
                    qrcode = new QRCode(qrAuthEl, {
                      width: $(qrAuthEl).attr('width'),
                      height: $(qrAuthEl).attr('height'),
                      colorDark : $(qrAuthEl).attr('color-dark'),
                      colorLight : $(qrAuthEl).attr('color-light'),
                      correctLevel : QRCode.CorrectLevel.L
                    });
                    var accessToken = $(config.els.accessToken).val();
                    if (!data.uid || !accessToken) return;
                    var rawCode = data.uid + "_" + accessToken;
                    qrcode.makeCode(rawCode);
                  }
                }
            }, function (e) {
              console.log(e);
            });
          });
        });
        socket.on('redirect', function (data) {
          window.location.href = data;
        });
        socket.on('disconnect', function () {
          utils.clearCode();
        });
      });
    });

  }

  /**
  * utils() is a utility method wrapper
  *
  * @noparam
  */
  var utils = (function () {
    return {
      
      /**
      * ajax() is a method that makes XHR requests
      *
      * @noparam
      */
      ajax : function (url, type, data, dataType, contentType, beforeSend, success, error) {
        return $.ajax({
          url: url,
          type: type,
          data: data,
          dataType: dataType,
          contentType: contentType,
          beforeSend : beforeSend,
          success: success,
          error: error
        });
      },

      /**
      * getScript() is a method that gets js file source into context within given url
      *
      * @noparam
      */
      getScript : function (src, success) {
        return $.ajax({
          url: src,
          dataType: 'script',
          async : false,
          success: success,
          error: function (e) { console.dir(e); }
        }); 
      },

      /**
      * clear() is a method that clears the qrcode image
      *
      * @noparam
      */
      clearCode : function () {
        if ($('#qrauth').html().length > 0) {
          $('#qrauth').html('');
        }
      },

      /**
      * checkIfQrCodeExists() is a method that controls the existance of a parsed QR code before
      *
      * @noparam
      */
      checkIfQrCodeExists : function () {
        return ($('#qrauth').html().length > 0 ? true : false);
      }
    }
  })();

  /**
  * config() is a configuration methods wrapper
  *
  * @noparam
  */
  var config = (function () {
    return {
      els : {
        accessToken : '#accessToken'
      },
      urls : {
        qrCode : 'http://davidshimjs.github.com/qrcodejs/qrcode.min.js',
        socketIO : 'https://cdn.socket.io/socket.io-1.3.5.js',
        auth : 'http://localhost:3000/auth'
      },
      messages : {
        error : {
          default : 'There is a problem with the authentication URL to fetch QRCode.'
        }
      }
    }
  })();

  return {
    init : init
  }
	
})();
