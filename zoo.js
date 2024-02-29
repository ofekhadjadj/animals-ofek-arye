let animalsArry = JSON.parse(localStorage.getItem("animals")); // תפיסת מערך חיות מלוקל סטורג
//תפיסת אלמנטים
let animalCard = document.getElementById("animal-cards");

const searchAnimalName = document.getElementById("name-search");
const searchAnimalWeight = document.getElementById("weight-search");
const searchAnimalHeight = document.getElementById("height-search");
const colorSearch = document.getElementById("color-search");
const habitatSearchLand = document.getElementById("land-search");
const habitatSearchSea = document.getElementById("sea-search");
const pradatorSearchTrue = document.getElementById("is-pradator");
const pradatorSearchFalse = document.getElementById("not-pradator");
const clearBt = document.getElementById("clear-bt");

//אוביקט של פורם לצורך שמירה בלוקל סטורג ואיפוס
let formObj = {
  nameForm: "",
  WeightForm: "",
  HeightForm: "",
  colorForm: "",
  habitatLandForm: false,
  habitatSeaForm: false,
  pradatorTrueForm: false,
  pradatorFalseForm: false,
};

//בדיקה אם קיים מפתח בשם זה בלוקל סטורג, אם לא קיים נפתח אחד כזה ונשים בו את מערך החיות
if (JSON.parse(localStorage.getItem("filterd array"))) {
} else {
  localStorage.setItem("filterd array", JSON.stringify(animalsArry));
}

renderAvailableAnimals(); //מקים בדף את כרטיסי כל החיות
//תפיסת כל הכרטיסים הקיימים למערך 1
// האזנות לאירועים בפורם
searchAnimalName.addEventListener("input", filtering);
searchAnimalWeight.addEventListener("input", filtering);
searchAnimalHeight.addEventListener("input", filtering);
colorSearch.addEventListener("input", filtering);
habitatSearchLand.addEventListener("input", filtering);
habitatSearchSea.addEventListener("input", filtering);
pradatorSearchTrue.addEventListener("input", filtering);
pradatorSearchFalse.addEventListener("input", filtering);
clearBt.addEventListener("click", clearForm);

//פונקציה שמשנה את המערך בלוקל סטורג לפי המסננים
function filtering(e) {
  let newArry = animalsArry;
  if (searchAnimalName.value) {
    //בדיקת מסנן שם
    newArry = newArry.filter(function (animal) {
      return animal.name
        .toLowerCase()
        .includes(searchAnimalName.value.toLowerCase());
    });
  }
  if (searchAnimalWeight.value) {
    newArry = newArry.filter(function (animal) {
      return animal.weight > searchAnimalWeight.value;
    });
  }

  if (searchAnimalHeight.value) {
    newArry = newArry.filter(function (animal) {
      return animal.height > searchAnimalHeight.value;
    });
  }

  if (colorSearch.value) {
    newArry = newArry.filter(function (animal) {
      return animal.color === colorSearch.value;
    });
  }

  if (habitatSearchLand.checked || habitatSearchSea.checked) {
    newArry = newArry.filter(function (animal) {
      return habitatSearchLand.checked
        ? animal.habitat === habitatSearchLand.value
        : animal.habitat === habitatSearchSea.value;
    });
  }

  if (pradatorSearchTrue.checked || pradatorSearchFalse.checked) {
    newArry = newArry.filter(function (animal) {
      return pradatorSearchTrue.checked
        ? animal.isPredator.toString() == pradatorSearchTrue.value
        : animal.isPredator.toString() == pradatorSearchFalse.value;
    });
  }

  formObjUpdate(); //הפעלת פונקצית עדכון אוביקט הטופס

  localStorage.setItem("filterd array", JSON.stringify(newArry)); //שמירת המערך המסונן בלוקל סטורג
  renderAvailableAnimals(); //הצגת הכרטיסים של החיות בדף
}

//פונקציה שמאפסת את המסננים בטופס
function clearForm() {
  searchAnimalName.value = "";
  searchAnimalWeight.value = "";
  searchAnimalHeight.value = "";
  colorSearch.value = "";
  habitatSearchLand.checked = false;
  habitatSearchSea.checked = false;
  pradatorSearchFalse.checked = false;
  pradatorSearchTrue.checked = false;
  formObjClear(); //הפעלת פונקצית ניקוי לטופס

  localStorage.setItem("filterd array", JSON.stringify(animals)); //שמירת המערך המקורי במקום המערך במסונן בלוקל סטורג
  renderAvailableAnimals(); //הצגת הכרטיסים של החיות בדף
}

//פונקית לשמירת הערכים מהטופס באובייקט המסננים
function formObjUpdate() {
  formObj.nameForm = searchAnimalName.value;
  formObj.WeightForm = searchAnimalWeight.value;
  formObj.HeightForm = searchAnimalHeight.value;
  formObj.colorForm = colorSearch.value;
  formObj.habitatLandForm = habitatSearchLand.checked;
  formObj.habitatSeaForm = habitatSearchSea.checked;
  formObj.pradatorTrueForm = pradatorSearchTrue.checked;
  formObj.pradatorFalseForm = pradatorSearchFalse.checked;
  localStorage.setItem("form object", JSON.stringify(formObj)); //שמירה בלוקל סטורג
}

//פונקית לניקוי הערכים מהטופס באובייקט המסננים
function formObjClear() {
  formObj.nameForm = "";
  formObj.WeightForm = "";
  formObj.HeightForm = "";
  formObj.colorForm = "";
  formObj.habitatLandForm = false;
  formObj.habitatSeaForm = false;
  formObj.pradatorTrueForm = false;
  formObj.pradatorFalseForm = false;
  localStorage.setItem("form object", JSON.stringify(formObj)); //שמירה בלוקל סטורג
}

//פנקציה לבניית הכרטיסים של החיות להצגה בדף
function renderAvailableAnimals() {
  animalCard.innerHTML = "";
  let filteredarr = JSON.parse(localStorage.getItem("filterd array"));
  filteredarr.forEach((animal) => {
    animalCard.innerHTML += `
    <div id=${animal.name} class="card">
          <img src="./images/lion-place-holder.webp" alt="profile img" />
          <h2>${animal.name}</h2>
        </div>
    
    `;
  });
}
function visitAnimal(animalName) {
  // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
}

function runOnCards() {
  let cardArr = document.querySelectorAll(".card");
  let pickedAnimal;
  for (const card of cardArr) {
    card.addEventListener("click", (e) => {
      pickedAnimal = e.target.closest(".card").id;
      localStorage.setItem("pickedAnimal", JSON.stringify(pickedAnimal));
    });
  }
}
runOnCards();
