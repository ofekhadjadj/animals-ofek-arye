function createNewVisitor(event) {
  const userNameForm = document.getElementById("usernameform").value; //שמירה של הערך של שם המשתמש
  const coinsForm = parseInt(document.getElementById("user-coins-form").value); //שמירה של הערך של המטבעות
  let visitorsArry = JSON.parse(localStorage.getItem("visitors")); //שליפה והמרה של המערך מהלוקל סטורג

  event.preventDefault();
  //בדיקה הכוללת פונקציה שבנינו למטה ליוזר ניים לבדוק שהוא לא ריק
  if (validateFormInputs(userNameForm) === false) {
    return;
  }
  //בדיקה הכוללת פונקציה שבנינו כפילות שמות
  if (visitorExists(visitorsArry, userNameForm) === false) {
    return;
  }
  pushNewVisitor(makeVisitor(userNameForm, coinsForm), visitorsArry); //דחיפת משתמש חדש למערך המשתמשים כאובייקט
  uploadToLocalstorage(visitorsArry); //העלאה ללוקל סטורג
  window.location.href = "/login.html"; // העברה לדף לוגאין
}

const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}

function validateFormInputs(userNameForm) {
  if (!userNameForm) {
    alert("not good you must to insert a name");
    return false;
  }
}
function visitorExists(visitorsArry, usernameform) {
  for (let i = 0; i < visitorsArry.length; i++) {
    if (usernameform === visitorsArry[i].name) {
      alert("This name is taken");
      return false;
    }
  }
}

function makeVisitor(userNameForm, coinsForm) {
  let user = {
    name: userNameForm,
    coins: coinsForm,
  };
  return user;
}

function pushNewVisitor(user, visitorsArry) {
  visitorsArry.push(user);
}

function uploadToLocalstorage(visitorsArry) {
  localStorage.setItem("visitors", JSON.stringify(visitorsArry));
}
