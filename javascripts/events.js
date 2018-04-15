const buildDom = require('./dom');

const addEventListener = (pets) => {
  const catBtn = document.getElementById('cat-btn');
  const dogBtn = document.getElementById('dog-btn');
  const dinoBtn = document.getElementById('dino-btn');

  catBtn.addEventListener('click', () => {
    filterPets('cat');
  });

  dogBtn.addEventListener('click', () => {
    filterPets('dog');
  });

  dinoBtn.addEventListener('click', () => {
    filterPets('dino');
  });

  const filterPets = (petType) => {
    const newPetArray = [];
    pets.forEach((pet) => {
      if (pet.type === petType) {
        newPetArray.push(pet);
      };
    });
    buildDom(newPetArray);
  };
};

const showAll = (pets) => {
  const showAllBtn = document.getElementById('show-all');
  showAllBtn.addEventListener('click', () => {
    buildDom(pets);
  });
};

module.exports = {
  addEventListener,
  showAll,
};
