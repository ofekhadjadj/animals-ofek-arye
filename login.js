let visitorsArry = JSON.parse(localStorage.getItem("visitors")); // תפיסת מערך מבקרים מלוקל סטורג
let cardDiv = document.getElementById("visitors-cards"); //תפיסת דיב שמכיל את המבקרים
const searchInput = document.getElementById("search-from"); //תפיסת אינפוט חיפוש
//הקמת מפתח שתופס את שם האורח המחובר
if (localStorage.getItem("logged user name") != "null") {
} else {
  localStorage.setItem("logged user name", JSON.stringify(null));
  localStorage.setItem("logged user coins", JSON.stringify(null));
}

loadVisitors(visitorsArry); //רנדור למסך את המבקרים הקיימים

searchInput.addEventListener("input", arryFiltering); //האזנה לאירוע שינוי באינפוט
function arryFiltering(e) {
  //פונקצייה שמופעלת על ידי האיוונט ליסטינר
  cardDiv.innerHTML = ``; //איפוס הדיב של המבקרים
  let newArry = visitorsArry.filter(function (visitor) {
    // יצירת מערך חדש שיכיל את המערך המסונן
    return visitor.name.toLowerCase().includes(e.target.value.toLowerCase()); //בדיקת הכלה של האותיות שהוזנו והמרה לאותיות קטנות
  });
  loadVisitors(newArry); //רנדור מערך מסונן
}

function loadVisitors(visitorsArry) {
  //פונקצייה שמייצרת דיב קארד
  visitorsArry.forEach((visitor, index) => {
    //לולאה שרצה על המערך
    cardDiv.innerHTML += ` 
    <div class="card" id="card-${index}">
    <img src="./images/${visitor.image}.jpg" alt="profile img" />
    <h2>${visitor.name}</h2>
    <h3>Coins: ${visitor.coins}</h3>
  </div>`;
  }); //תבנית של הקארדים
}

for (let i = 0; i < cardDiv.children.length; i++) {
  //לולאה שמאזינה לקליק על קארד
  cardDiv.children[i].addEventListener("click", (e) => {
    const findIdInString = e.target.parentElement.id.split("-"); //פיצול האיי דיי הנלחץ למציאת האינדקס במערך המקורי
    if (localStorage.getItem("logged user name") != "null") {
      //בדיקה שכבר קיים אורח בלוקל
      document.getElementById("modal-logout").style.display = "block"; //הצגת חלון מודאל
      document
        .getElementById("modal-logout-yes") // בלחיצה על הכפתור
        .addEventListener("click", () => {
          localStorage.setItem("logged user name", JSON.stringify(null)); //מחיקת שם האורח הקיים מהלוקל
          document.getElementById("modal-logout").style.display = "none"; // הסתרת המודאל
        });
      document
        .getElementById("modal-logout-no") //בלחיצה על הפתור
        .addEventListener(
          "click",
          () => (document.getElementById("modal-logout").style.display = "none") //הסתרת המודאל
        );
    } else {
      //במידה ולא קיים אורח
      localStorage.setItem(
        "logged user name",
        JSON.stringify(visitorsArry[findIdInString[1]].name) //הכנסת שם אורח נבחר לוגאין
      );

      localStorage.setItem(
        "logged user coins",
        JSON.stringify(visitorsArry[findIdInString[1]].coins)
      );

      window.location.href = "/zoo.html"; //מעבר לעמוד זוו
    }
  });
}
