let animalsArry = JSON.parse(localStorage.getItem("animals")); // תפיסת מערך חיות מלוקל סטורג
const searchAnimalName = document.getElementById("name-search");
const searchAnimalWeight = document.getElementById("weight-search");
const searchAnimalHeight = document.getElementById("height-search");
const colorSearch = document.getElementById("color-search");
const habitatSearchLand = document.getElementById("land-search");
const habitatSearchSea = document.getElementById("sea-search");
const pradatorSearchTrue = document.getElementById("is-pradator");
const pradatorSearchFalse = document.getElementById("not-pradator");
const clearBt = document.getElementById("clear-bt");

if (JSON.parse(localStorage.getItem("filterd array"))) {
} else {
  localStorage.setItem("filterd array", JSON.stringify(animalsArry));
}

// colorSearch.addEventListener("change", () => console.log(colorSearch.value));

searchAnimalName.addEventListener("input", arryFilteringName); //האזנה לאירוע שינוי באינפוט
function arryFilteringName(e) {
  //פונקצייה שמופעלת על ידי האיוונט ליסטינר
  // cardDiv.innerHTML = ``; //איפוס הדיב של המבקרים
  let newArry = animalsArry.filter(function (animal) {
    // יצירת מערך חדש שיכיל את המערך המסונן
    return animal.name.toLowerCase().includes(e.target.value.toLowerCase()); //בדיקת הכלה של האותיות שהוזנו והמרה לאותיות קטנות
  });
  localStorage.setItem("filterd array", JSON.stringify(newArry));
  // loadVisitors(newArry); //רנדור מערך מסונן
}
searchAnimalWeight.addEventListener("input", arryFilteringWeight); //האזנה לאירוע שינוי באינפוט
function arryFilteringWeight(e) {
  //פונקצייה שמופעלת על ידי האיוונט ליסטינר
  // cardDiv.innerHTML = ``; //איפוס הדיב של המבקרים
  let newArry = animalsArry.filter(function (animal) {
    // יצירת מערך חדש שיכיל את המערך המסונן
    return animal.weight > e.target.value;
  });
  localStorage.setItem("filterd array", JSON.stringify(newArry));
  // loadVisitors(newArry); //רנדור מערך מסונן
}

function renderAvailableAnimals() {
  // ממשו את הלוגיקה שמרנדרת את החיות לתוך הדיב עם האיידי animal-cards
  // וודאו שאתם מציגים אך ורק את החיות שעומדות בפילטורים הנוכחיים
  // במידה ואין פילטרים מסומנים, הציגו את כל החיות
}
function visitAnimal(animalName) {
  // ממשו את הלוגיקה של מעבר לעמוד חיה עבור החיה הספציפית שנבחרה
  // שמרו בלוקל סטורג' את החיה שנבחרה, כך שבעמוד החיה נוכל לשלוף אותה מהסטורג' ולהציגה בהתאם
}

function setFilter(filterKey, filterValue) {
  /**
   * ממשו את הלוגיקה של השמת פילטר
   * הפילטרים הקיימים הם
   * isPredator: true | false
   * habitat: "land" | "sea"
   * weight: value > user selected weight
   * height: value > user selected height
   * color: dropdown of all available colors
   */
  // ודאו כי אתם שומרים את הפילטרים שהיוזר בחר בלוקל סטורג׳ וטוענים אותם בהתאם
  // רנדרו רק את החיות שעומדות בתנאים של הפילטרים
}
