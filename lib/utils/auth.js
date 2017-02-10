//Configs
import urls from '../config/url';

const auth = async (appId, appSecret) => {
  const response = await fetch(urls.auth, { header: { 'Content-Type': 'application/json'}, body: { appId, appSecret } });
  const json = await response.json();
  resolve(json);
};

export default auth;