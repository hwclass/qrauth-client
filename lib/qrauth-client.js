module.exports = async function () {
  // const response = await fetch(`${config.serverURL}/files/${encodedPath}`, requestOptions);
  try {
    const response = await fetch('www.google.com', { header: { 'Content-Type': 'application/json'} });
    const json = await response.json();
    return json;
  } catch (err) {
    console.log(err.message);
  }
};
