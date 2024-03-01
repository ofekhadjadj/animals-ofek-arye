// מערכים גלובלים שישמשו אותנו בכל העמודים
let visitors = [
  {
    name: "John Smith",
    coins: 50,
  },
  {
    name: "Emily Johnson",
    coins: 50,
  },
  {
    name: "Michael Williams",
    coins: 50,
  },
  {
    name: "Jessica Brown",
    coins: 50,
  },
  {
    name: "Christopher Jones",
    coins: 50,
  },
  {
    name: "Ashley Davis",
    coins: 50,
  },
  {
    name: "Matthew Miller",
    coins: 50,
  },
  {
    name: "Amanda Wilson",
    coins: 50,
  },
  {
    name: "David Moore",
    coins: 50,
  },
  {
    name: "Sarah Taylor",
    coins: 50,
  },
  {
    name: "James Anderson",
    coins: 50,
  },
  {
    name: "Jennifer Thomas",
    coins: 50,
  },
  {
    name: "Robert Jackson",
    coins: 50,
  },
  {
    name: "Elizabeth White",
    coins: 50,
  },
  {
    name: "Daniel Harris",
    coins: 50,
  },
  {
    name: "Melissa Martin",
    coins: 50,
  },
  {
    name: "William Thompson",
    coins: 50,
  },
  {
    name: "Linda Garcia",
    coins: 50,
  },
  {
    name: "Joseph Martinez",
    coins: 50,
  },
  {
    name: "Karen Robinson",
    coins: 50,
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
ocument.addEventListener("DOMContentLoaded", checkIfHeaderShow);
if (
  window.location.pathname === "/zoo.html" ||
  window.location.pathname === "/animal.html" ||
  window.location.pathname === "/dashboard.html"
) {
  checkIfHeaderShow(); //נבדוק אם קיים למנוע כפילות
  console.log("show header"); // אם קיים לא נעשה כלום ואם לא קיים נוסיף
} else {
  checkIfHeaderShow(); //נבדוק אם קיים למנוע כפיליות
  console.log("dont show header"); //אם קיים נמחק אותו מהדף ואם לא קיים לא נעשה דברב
}

function checkIfHeaderShow() {
  const element = document.querySelector("header");
  console.log(element);
  if (element) {
    return true;
  } else return false;
}
