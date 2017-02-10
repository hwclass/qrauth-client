/**
* connect is a method to connect any url
*
* @param <string> type
* @param <Promise> callback
*/
export const ifElementExists = (qrAuthElement) => {
  return !!document.querySelector(qrAuthElement);
};