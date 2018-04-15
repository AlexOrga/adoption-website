const getPets = require('./pets');
const buildDom = require('./dom.js');
const events = require('./events');

const petLoad = function () {
  const data = JSON.parse(this.responseText).pets;
  buildDom(data);
  events.addEventListener(data);
  events.showAll(data);
};

const noPets = () => {
  alert('There are no pets to be found');
};

const initializer = () => {
  getPets(petLoad, noPets);
};

module.exports = initializer;
