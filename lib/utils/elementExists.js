/**
* connect is a method to connect any url
*
* @param <string> type
* @param <Promise> callback
*/
const elementExists = qrAuthElement => !!document.querySelector(qrAuthElement);

export default elementExists;
