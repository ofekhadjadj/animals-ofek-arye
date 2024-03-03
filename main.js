// מערכים גלובלים שישמשו אותנו בכל העמודים
let visitors = [
  {
    name: "John Smith",
    coins: 1,
    visited: [],
  },
  {
    name: "Emily Johnson",
    coins: 50,
    visited: [],
  },
  {
    name: "Michael Williams",
    coins: 50,
    visited: [],
  },
  {
    name: "Jessica Brown",
    coins: 50,
    visited: [],
  },
  {
    name: "Christopher Jones",
    coins: 50,
    visited: [],
  },
  {
    name: "Ashley Davis",
    coins: 50,
    visited: [],
  },
  {
    name: "Matthew Miller",
    coins: 50,
    visited: [],
  },
  {
    name: "Amanda Wilson",
    coins: 50,
    visited: [],
  },
  {
    name: "David Moore",
    coins: 50,
    visited: [],
  },
  {
    name: "Sarah Taylor",
    coins: 50,
    visited: [],
  },
  {
    name: "James Anderson",
    coins: 50,
    visited: [],
  },
  {
    name: "Jennifer Thomas",
    coins: 50,
    visited: [],
  },
  {
    name: "Robert Jackson",
    coins: 50,
    visited: [],
  },
  {
    name: "Elizabeth White",
    coins: 50,
    visited: [],
  },
  {
    name: "Daniel Harris",
    coins: 50,
    visited: [],
  },
  {
    name: "Melissa Martin",
    coins: 50,
    visited: [],
  },
  {
    name: "William Thompson",
    coins: 50,
    visited: [],
  },
  {
    name: "Linda Garcia",
    coins: 50,
    visited: [],
  },
  {
    name: "Joseph Martinez",
    coins: 50,
    visited: [],
  },
  {
    name: "Karen Robinson",
    coins: 50,
    visited: [],
  },
];
let animals = [
  {
    name: "Lion",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Elephant",
    isPredator: false,
    weight: 1200,
    height: 300,
    color: "grey",
    habitat: "land",
  },
  {
    name: "Giraffe",
    isPredator: false,
    weight: 100,
    height: 500,
    color: "yellow",
    habitat: "land",
  },
  {
    name: "Tiger",
    isPredator: true,
    weight: 100,
    height: 120,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Monkey",
    isPredator: false,
    weight: 100,
    height: 80,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Kangaroo",
    isPredator: false,
    weight: 120,
    height: 180,
    color: "brown",
    habitat: "land",
  },
  {
    name: "Penguin",
    isPredator: false,
    weight: 100,
    height: 60,
    color: "black",
    habitat: "sea",
  },
  {
    name: "Zebra",
    isPredator: false,
    weight: 100,
    height: 150,
    color: "white",
    habitat: "land",
  },
  {
    name: "Cheetah",
    isPredator: true,
    weight: 100,
    height: 110,
    color: "yellow",
    habitat: "land",
  },
  {
    name: "Dolphin",
    isPredator: false,
    weight: 150,
    height: 200,
    color: "grey",
    habitat: "sea",
  },
  {
    name: "Shark",
    isPredator: true,
    weight: 1000,
    height: 300,
    color: "grey",
    habitat: "sea",
  },
  {
    name: "Octopus",
    isPredator: true,
    weight: 10,
    height: 50,
    color: "purple",
    habitat: "sea",
  },
  {
    name: "Sea Turtle",
    isPredator: false,
    weight: 500,
    height: 100,
    color: "green",
    habitat: "sea",
  },
  {
    name: "Jellyfish",
    isPredator: false,
    weight: 5,
    height: 30,
    color: "purple",
    habitat: "sea",
  },
];

// פונקציה זו טוענת עבורכם את המידע ההתחלתי של האפליקציה, במידה וקיים מידע בלוקל סטורג׳, היא תקח אותו משם
// אל תשנו את הקוד בפונקציה הזו כדי לשמור על תקינות הטמפלייט
function generateDataset() {
  if (localStorage.getItem("visitors")) {
    visitors = JSON.parse(localStorage.getItem("visitors"));
  } else {
    localStorage.setItem("visitors", JSON.stringify(visitors));
  }
  if (localStorage.getItem("animals")) {
    animals = JSON.parse(localStorage.getItem("animals"));
  } else {
    localStorage.setItem("animals", JSON.stringify(animals));
  }

  // console.log(visitors);
}
generateDataset();

//********************** */
function logout() {
  //ממשו את הלוגיקה שמתנתקת מאורח מחובר
  // שימו לב לנקות את השדה המתאים בלוקל סטורג'
}
//logic to header show
document.addEventListener("DOMContentLoaded", checkIfHeaderShow);

function checkIfHeaderShow() {
  const element = document.querySelector("header");
  if (
    window.location.pathname === "/zoo.html" ||
    window.location.pathname === "/animal.html" ||
    window.location.pathname === "/dashboard.html"
  ) {
    if (element === null) {
      makeHeader();
    }
  } else {
  }

  let restBt = document.getElementById("header-rest-bt");

  restBt.addEventListener("click", () => {
    localStorage.removeItem("pickedAnimal");
    localStorage.removeItem("form object");
    localStorage.removeItem("filterd array");
    localStorage.removeItem("logged user coins");
    localStorage.removeItem("logged user name");
    localStorage.setItem("visitors", JSON.stringify(visitors));
    localStorage.setItem("animals", JSON.stringify(animals));
    window.location.href = "/login.html";
  });
}

function makeHeader() {
  let body = document.querySelector("body");
  let userName = localStorage.getItem("logged user name");
  let userCoins = localStorage.getItem("logged user coins");
  let visitorsFromStorage = JSON.parse(localStorage.getItem("visitors"));
  let header = document.createElement("header");
  header.setAttribute("id", "header-id");
  body.insertBefore(header, body.firstChild);
  header.innerHTML = `<div class="header-titles">
  <h4 id="header-visitor">visitor:${userName}</h4>
  <h4 id="header-coins">coins:${userCoins}</h4>
</div>
<select id="header-dropdown-visitors">
  <option value="">Select visitor:</option>
</select>
<div class="headr-bts">
  <button  id="header-dash-bt"><a href="./dashboard.html">My Dashboard</a></button>
  <button id="header-rest-bt">Reset</button>
</div>
<nav>
  <ul>
    <li><a href="./zoo.html">Zoo</a></li>
    <li><a href="./signup.html">Sign up</a></li>
    <li><a href="./login.html">Log in</a></li>
  </ul>
</nav>`;
  let dropdownHtml = document.getElementById("header-dropdown-visitors");

  function loopForDropDown() {
    for (visitor of visitorsFromStorage) {
      dropdownHtml.innerHTML += `
      <option value="${visitor.name}">${visitor.name}</option>
      `;
    }
  }
  loopForDropDown();
}
