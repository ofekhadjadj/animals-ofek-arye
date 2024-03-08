let visitorsArry = JSON.parse(localStorage.getItem("visitors")); // תפיסת מערך מבקרים מלוקל סטורג
let visitedAnimals = document.getElementById("visited-animals");
let feededAnimals = document.getElementById("feeded-animals");
let favoriteAnimal = document.getElementById("favorite-animal");
let currentVisitorName = JSON.parse(localStorage.getItem("logged user name")); // תפיסת מערך מבקרים מלוקל סטורג
function showVisitedAnimals() {
  visitorsArry[getCurrentVisitorIndex()].visited.forEach((animal) => {
    visitedAnimals.innerHTML += `
    <div id=${animal} class="card-dash">
          <img src="./images/${animal}.jpg" alt="profile img" />
          <h2>${animal}</h2>
        </div> `;
  });
}
showVisitedAnimals();

function showFeededAnimals() {
  visitorsArry[getCurrentVisitorIndex()].feeded.forEach((animal) => {
    feededAnimals.innerHTML += `
    <div id=${animal} class="card-dash">
          <img src="./images/${animal}.jpg" alt="profile img" />
          <h2>${animal}</h2>
        </div>`;
  });
}
showFeededAnimals();
function showFavoriteAnimal() {
  let animal = highestFrequencyVisitAnimal();
  favoriteAnimal.innerHTML = `
<div id=${animal} class="card-dash">
      <img src="./images/${animal}.jpg" alt="profile img" />
      <h2>${animal}</h2>
    </div>
`;
}
showFavoriteAnimal();

function getCurrentVisitorIndex() {
  let currentVisitorIndex;
  visitorsArry.forEach((element, index) => {
    if (element.name === currentVisitorName) {
      currentVisitorIndex = index;
      return index;
    }
  });
  return currentVisitorIndex;
}

function highestFrequencyVisitAnimal() {
  let visitedAnimalArr = visitorsArry[getCurrentVisitorIndex()].visited;
  let index;
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < visitedAnimalArr.length; i++) {
    for (let j = 0; j < visitedAnimalArr.length; j++) {
      if (visitedAnimalArr[i] === visitedAnimalArr[j]) {
        count1++;
      }
    }
    if (count1 > count2) {
      index = i;
      count2 = count1;
      count1 = 0;
    }
  }
  return visitedAnimalArr[index];
}
