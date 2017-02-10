/**
* connect is a method to connect any url
*
* @param <string> selector
* @param <Promise> callback
*/
const clearCode = selector => document.querySelector(selector).innerHTML = '';

export default clearCode;