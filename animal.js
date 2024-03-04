let visitorsArry = JSON.parse(localStorage.getItem("visitors")); // תפיסת מערך מבקרים מלוקל סטורג
let animalsArry = JSON.parse(localStorage.getItem("animals")); // תפיסת מערך חיות מלוקל סטורג
let filterdAnimalArr = JSON.parse(localStorage.getItem("filterd array"));
let currentAnimal = JSON.parse(localStorage.getItem("pickedAnimal"));
let currentVisitorName = JSON.parse(localStorage.getItem("logged user name")); // תפיסת מערך מבקרים מלוקל סטורג
let currentVisitorCoins = JSON.parse(localStorage.getItem("logged user coins")); // תפיסת מערך מבקרים מלוקל סטורג
let imagePage = document.getElementById("image");
let namePage = document.getElementById("name");
let weightPage = document.getElementById("weight");
let heightPage = document.getElementById("height");
let colorPage = document.getElementById("color");
let habitatPage = document.getElementById("habitat");
let isPredatorPage = document.getElementById("isPredator");
let feedbtPage = document.getElementById("feed-animal");
let isPredatorModal = document.getElementById("ispredator-alert");
let ispredatorModalBt = document.getElementById("ispredator-alert-bt");
let relatedAnimals = document.getElementById("related-animals");
feedbtPage.addEventListener("click", feedAnimal);
function renderAnimal() {
  let animal = animalsArry[getCurrentAnimalIndex()];
  imagePage.innerHTML = `<img src="./images/${animal.name}.jpg" alt="${animal.name}">`;
  namePage.innerText = animal.name;
  weightPage.innerText = "Weight: " + animal.weight + "kg";
  heightPage.innerText = "Height: " + animal.height + "cm";
  colorPage.innerText = "Color: " + animal.color;
  habitatPage.innerText = "habitat: " + animal.habitat;
  isPredatorPage.innerText = "Predator: " + animal.isPredator;
}

function getCurrentAnimalIndex() {
  let currentAnimalIndex;
  animalsArry.forEach((element, index) => {
    if (element.name === currentAnimal) {
      currentAnimalIndex = index;
      return index;
    }
  });
  return currentAnimalIndex;
}
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

renderAnimal();

function feedAnimal() {
  let visitorArrAfterDelete;
  let animalArrAfterDelete;
  let filterdAnimalArrAfterDelete;
  let animal = animalsArry[getCurrentAnimalIndex()];
  if (currentVisitorCoins < 2) {
    if (animal.isPredator) {
      visitorArrAfterDelete = visitorsArry.filter(
        (visitor) => visitor.name !== currentVisitorName
      );
      document
        .getElementById("ispredator-alert-bt")
        .setAttribute("href", "./login.html");
      document.getElementById(
        "modal-text"
      ).innerHTML = ` Thank you very much for the feeding!<br />
      Unfortunately you fed a predatory animal and got eaten.<br />
      You must connect with a new guest`;
      isPredatorModal.style.display = "block";
      document.getElementById("header-id").style.display = "none";
      localStorage.setItem("visitors", JSON.stringify(visitorArrAfterDelete));
      localStorage.setItem("logged user name", JSON.stringify(null));
      localStorage.setItem("logged user coins", JSON.stringify(0));
      ispredatorModalBt.addEventListener("click", () => {
        window.location.href = "./login.html";
      });
    } else {
      animalArrAfterDelete = animalsArry.filter(
        (animal) => animal.name !== currentAnimal
      );
      localStorage.setItem("animals", JSON.stringify(animalArrAfterDelete));
      localStorage.setItem("pickedAnimal", JSON.stringify(""));

      filterdAnimalArrAfterDelete = filterdAnimalArr.filter(
        (animal) => animal.name !== currentAnimal
      );
      localStorage.setItem(
        "filterd array",
        JSON.stringify(filterdAnimalArrAfterDelete)
      );
      document
        .getElementById("ispredator-alert-bt")
        .setAttribute("href", "./zoo.html");
      document.getElementById(
        "modal-text"
      ).innerHTML = ` Thank you very much for the feeding!<br />
      Unfortunately you fed a unpredatory animal and she's escaped.`;
      isPredatorModal.style.display = "block";
      document.getElementById("header-id").style.display = "none";

      ispredatorModalBt.addEventListener("click", () => {
        window.location.href = "./zoo.html";
      });
    }
  } else {
    document.getElementById("header-coins").innerText = `coins:${
      currentVisitorCoins - 2
    }`;
    localStorage.setItem(
      "logged user coins",
      JSON.stringify(currentVisitorCoins - 2)
    );
    visitorsArry[getCurrentVisitorIndex()].coins = currentVisitorCoins - 2;

    visitorsArry[getCurrentVisitorIndex()].feeded.push(currentAnimal);
    localStorage.setItem("visitors", JSON.stringify(visitorsArry));

    document.getElementById("modal-text").innerText =
      "Thank you very much for the feeding!";
    isPredatorModal.style.display = "block";
    ispredatorModalBt.addEventListener("click", () => {
      isPredatorModal.style.display = "none";
      window.location.href = "./animal.html";
    });
  }
}

function renderRelatedAnimals() {
  let animalObj = animalsArry[getCurrentAnimalIndex()];
  let animalSameHabtitArr = animalsArry.filter((animal) => {
    return animal.habitat == animalObj.habitat;
  });
  animalSameHabtitArr.forEach((animal) => {
    relatedAnimals.innerHTML += `
    <div id=${animal.name} class="cardn">
          <img src="./images/${animal.name}.jpg" alt="profile img" />
          <h2>${animal.name}</h2>
        </div>
    
    `;
  });
}
renderRelatedAnimals();
function visitorGotEaten() {
  // ממשו את הלוגיקה של חיה שטורפת אורח
}

function animalEscaped() {
  //ממשו את הלוגיקה של חיה שבורחת מגן החיות
}
