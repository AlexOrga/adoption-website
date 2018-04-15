const printToDom = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

const buildDom = (pets) => {
  let domString = '';
  pets.forEach((pet) => {
    domString += `<div class="${pet.type} pet-card col-md-4">`;
    domString +=    `<h2 class="petHead">${pet.name}</h2>`;
    domString +=    `<img class="petPic" src="${pet.imageUrl}">`;
    domString +=    `<h3>Color: ${pet.color}</h3>`;
    domString +=    `<p>${pet.specialSkill}</p>`;
    domString +=    `<h4 class="${pet.type}-type">${pet.type}</h4>`;
    domString += `</div>`;
  });
  printToDom('pet-cards', domString);
};

module.exports = buildDom;
