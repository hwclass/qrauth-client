//Configs
import authUrl from '../config/url';

async function auth(appId, appSecret) {
    try {
      const response = await fetch(authUrl, { header: { 'Content-Type': 'application/json'}, body: { appId, appSecret } });
      //const response = await fetch(`${config.serverURL}/files/${encodedPath}`, requestOptions);
      const json = await response.json();
      return json;
    } catch (err) {
      console.error('Error occured on auth:', err);
      return err;
    }
};

export default auth;