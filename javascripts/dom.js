const printToDom = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

const buildDom = (pets) => {
  let domString = '';
  pets.forEach((pet) => {
    domString += `<div class="${pet.type}">`;
    domString +=    `<h3>${pet.name}</h3>`;
    domString +=    `<img src="${pet.imageUrl}">`;
    domString +=    `<p>${pet.color}</p>`;
    domString +=    `<p>${pet.specialSkill}</p>`;
    domString +=    `<p>${pet.type}</p>`;
    domString += `</div>`;
  });
  printToDom('pet-cards', domString);
};

module.exports = buildDom;
