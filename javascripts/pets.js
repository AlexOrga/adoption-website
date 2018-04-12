const getPets = (loadFunction, failFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', failFunction);
  myRequest.open('GET', '../db/pets.json');
  myRequest.send();
};

module.exports = getPets;
