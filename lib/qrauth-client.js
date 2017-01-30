module.exports = async function someMethod() {
  try {
    const response = await fetch('http://demo6097471.mockable.io/', { header: { 'Content-Type': 'application/json' } });
    const json = await response.json();
    return json;
  } catch (err) {
    throw new Error(err);
  }
};
