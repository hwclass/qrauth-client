//Configs
import urls from '../config/url';

const response = await fetch(urls.auth, { header: { 'Content-Type': 'application/json'} });
const json = await response.json();
return json;