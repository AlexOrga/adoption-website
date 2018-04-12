const getPets = require('./pets');
const buildDom = require('./dom.js');
const addEventListener = require('./events');

const petLoad = function () {
  const data = JSON.parse(this.responseText).pets;
  buildDom(data);
  addEventListener(data);
};

const noPets = () => {
  alert('There are no pets to be found');
};

const initializer = () => {
  getPets(petLoad, noPets);
};

module.exports = initializer;
